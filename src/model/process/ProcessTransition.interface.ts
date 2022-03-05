export default interface ProcessTransition {
    displayName?:string,
    to: string,
    allowedAttributes?: string[]
}