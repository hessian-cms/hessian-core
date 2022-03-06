import { NotReferenced, WrongEntryTarget, WrongTarget } from "./errors";
import { Process } from "./Process.interface";
import { Processes } from "./Processes.interface";
import { ProcessTransition } from "./ProcessTransition.interface";

export const validateProcesses = async (processes: Processes): Promise<true> => {
    const validKeys: string[] = Object.keys(processes).filter((key: string) => key.startsWith("state"));

    if (!validKeys.includes(processes.entryProcess)) {
        throw new WrongEntryTarget(`Entry process "${processes.entryProcess}" doesn't exist`);
    }

    /*
    hier wird getestet ob jeder Zustand, der durch target referenziert werden soll auch definiert ist
    */
    const valid: boolean[] = validKeys.map((key: string) => {
        const process: Process = processes[key as `state${string}`];
        if (!process.to) {
            return true;
        }

        if (process.to.length === 0) {
            return true;
        }


        return process
            .to
            .map((transition: ProcessTransition) => transition.target)
            .every((target: string) => validKeys.includes(target));

    })

    if (valid.includes(false)) {
        throw new WrongTarget(`Wrong target`);
    }

    //Test, ob ein definierter Zustand durch targets überhaupt referenziert wird
    const targetStates = new Set<string>();
    validKeys.forEach((key) => {
        let process = processes[key as `state${string}`];
        if (process.to) {
            process.to.forEach(transition => targetStates.add(transition.target));
        }
    })
    if (validKeys.map(key => targetStates.has(key)).includes(false)) {
        throw new NotReferenced(`Processes contain unreferenced States`)
    }
    return true;
}