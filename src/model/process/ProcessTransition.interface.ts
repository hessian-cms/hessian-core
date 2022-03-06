export interface ProcessTransition {
    target: `state${string}`,
    allowedAttributes?: string[]
}