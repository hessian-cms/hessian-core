import { ProcessTransition } from "./ProcessTransition.interface";

export interface Process {
    displayName?:string,
    to?: ProcessTransition[],
    visibleToAttributes?: string[]
}