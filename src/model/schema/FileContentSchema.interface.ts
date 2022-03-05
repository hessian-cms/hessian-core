export default interface FileContentSchema {
    type: "FILE",
    maxSize?: number,
    minSize?: number,
    mimeType?: string,
    ending?: string
}