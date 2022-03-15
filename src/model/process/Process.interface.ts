import { StateName } from "./process.types";
import { State } from "./State.interface";

export interface Process {
    startState: StateName,
    [name: StateName]: State
}