import { NotReferenced, ProcessMissingEntryTarget, ProcessMissingTarget } from "./process.errors";
import { State } from "./State.interface";
import { Process } from "./Process.interface";
import { StateTransition } from "./StateTransition.interface";

export const validateProcess = async (process: Process): Promise<true> => {
    const validKeys: string[] = Object.keys(process).filter((key: string) => key.startsWith("state"));

    if (!validKeys.includes(process.entryProcess)) {
        throw new ProcessMissingEntryTarget(`Entry process "${process.entryProcess}" doesn't exist`);
    }

    const valid: boolean[] = validKeys.map((key: string) => {
        const state: State = process[key as `state${string}`];
        if (!state.transitions) {
            return true;
        }

        if (state.transitions.length === 0) {
            return true;
        }

        return state
            .transitions
            .map((transition: StateTransition) => transition.target)
            .every((target: string) => validKeys.includes(target));
    })

    if (valid.includes(false)) {
        throw new ProcessMissingTarget(`Wrong target`);
    }

    //Test, ob ein definierter Zustand durch targets überhaupt referenziert wird
    const targetStates = new Set<string>();
    validKeys.forEach((key) => {
        const state: State = process[key as `state${string}`];
        if (state.transitions) {
            state.transitions.forEach(transition => targetStates.add(transition.target));
        }
    })
    if (validKeys.map(key => targetStates.has(key)).includes(false)) {
        throw new NotReferenced(`Processes contain unreferenced States`)
    }

    return true;
}

