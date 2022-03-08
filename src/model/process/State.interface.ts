import { StateTransition } from "./StateTransition.interface";

export interface StateId {
    state: number
}

export interface State {
    displayName?: string,
    transitions?: StateTransition[],
    accessableForAttributes?: string[]
}