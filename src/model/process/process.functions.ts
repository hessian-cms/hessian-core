import { ProcessMissingEntryTarget, ProcessMissingTarget } from "./process.errors";
import { State } from "./State.interface";
import { Process } from "./Process.interface";

export const validateProcess = async (process: Process): Promise<true> => {
    const validKeys: string[] = Object.keys(process).filter((key: string) => key.startsWith("state"));

    if (!validKeys.includes(process.entryProcess)) {
        throw new ProcessMissingEntryTarget(`Missing state for Entry: "${process.entryProcess}"`);
    }

    const invalidKeys: string[] = getInvalidKeys(validKeys, validKeys.map(key => process[key as `state${string}`]));

    if (invalidKeys.length > 0) {
        throw new ProcessMissingTarget(`Missing targeted states: ${invalidKeys.join(", ")}`)
    }

    return true;
}

const getInvalidKeys = (validKeys: string[], states: State[]): string[] => {
    return states
        .map(state => state.transitions?.map(transition => transition.target) || [])
        .flat()
        .filter(taget => !validKeys.includes(taget))
}