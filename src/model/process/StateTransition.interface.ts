export interface StateTransition {
    target: `state${string}`,
    allowedAttributes?: string[]
}