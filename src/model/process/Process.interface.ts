import { State } from "./State.interface";

export interface Process {
    entryProcess: StateName,
    [name: StateName]: State
}