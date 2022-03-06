import { Process } from "./Process.interface";

export interface Processes {
    entryProcess: `state${string}`,
    [name: `state${string}`]: Process
}