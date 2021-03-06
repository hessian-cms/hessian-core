import { Subject } from "../Subject.interface";
import { Process } from "./Process.interface";
import { StateName } from "./process.types";
import { State } from "./State.interface";

export const validateSubjectHasAccessToState = async (subject: Subject, currentState: StateName, process: Process): Promise<boolean> => {
    if (process[currentState] === undefined) throw Error(`State ${currentState} doesn't exist`);
    const state: State = process[currentState];
    const accessableForAttributes: string[] = state.accessableForAttributes || [];
    if(accessableForAttributes.length === 0) return true;
    return subject.attributes.some((attribute: string) => accessableForAttributes.includes(attribute));
}