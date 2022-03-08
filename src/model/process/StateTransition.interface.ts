import { StateName } from "./process.types";

export interface StateTransition {
    target: StateName,
    allowedAttributes?: string[]
}