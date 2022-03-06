import { WrongEntryTarget, WrongTarget } from "./errors";
import { Process } from "./Process.interface";
import { Processes } from "./Processes.interface";
import { ProcessTransition } from "./ProcessTransition.interface";

export const validateProcesses = async (processes: Processes): Promise<true> => {
    const validKeys: string[] = Object.keys(processes).filter((key: string) => key.startsWith("state"));

    if (!validKeys.includes(processes.entryProcess)) {
        throw new WrongEntryTarget(`Entry process "${processes.entryProcess}" doesn't exist`);
    }

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

    return true;
}