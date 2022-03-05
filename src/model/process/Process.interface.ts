import { ProcessTransition } from "./ProcessTransition.interface";

export interface Process {
    [name: string]: ProcessTransition
}