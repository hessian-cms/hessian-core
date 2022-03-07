export interface StateTransition {
    target: StateName,
    allowedAttributes?: string[]
}