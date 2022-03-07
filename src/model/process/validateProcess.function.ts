import { NotReferencedStates, ProcessMissingEntryTarget, ProcessMissingTarget } from "./process.errors";
import { State } from "./State.interface";
import { Process } from "./Process.interface";

export const validateProcess = async (process: Process): Promise<true> => {
    const validKeys: string[] = Object.keys(process).filter((key: string) => key.startsWith("state"));

    if (!validKeys.includes(process.entryProcess)) {
        throw new ProcessMissingEntryTarget(`Missing state for Entry: "${process.entryProcess}"`);
    }

    const invalidKeys: string[] = getInvalidKeys(validKeys, validKeys.map(key => process[key as StateName]));

    if (invalidKeys.length > 0) {
        throw new ProcessMissingTarget(`Missing targeted states: ${invalidKeys.join(", ")}`)
    }

    if (hasUnreferencedStates(validKeys, process)) {
        throw new NotReferencedStates(`Processes contain unreferenced States`)
    }

    return true;
}


const getInvalidKeys = (validKeys: string[], states: State[]): string[] => {
    return states
        .map(state => state.transitions?.map(transition => transition.target) || [])
        .flat()
        .filter(taget => !validKeys.includes(taget))
}

const hasUnreferencedStates = (validKeys: string[], process: Process): boolean => {
    const targetStates = new Set<string>();
    validKeys.forEach((key) => {
        const state: State = process[key as StateName];
        if (state.transitions) {
            state.transitions.forEach(transition => targetStates.add(transition.target));
        }
    })
    return validKeys.map(key => targetStates.has(key)).includes(false)
}

