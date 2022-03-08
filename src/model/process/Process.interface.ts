import { State } from "./State.interface";

export interface Process {
    entryProcess: `state${string}`,
    currentState?: State,
    [name: `state${string}`]: State
}
