import { State } from "./State.interface";

export interface Process {
    entryProcess: `state${string}`,
    [name: `state${string}`]: State
}