export interface ProcessTransition {
    displayName?:string,
    to: string,
    allowedSubjectAttributes?: string[]
}