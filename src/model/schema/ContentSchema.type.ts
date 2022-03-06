import { FileContentSchema } from "./FileContentSchema.interface";
import { ObjectContentSchema } from "./ObjectContentSchema.interface";

export type ContentSchema = FileContentSchema | ObjectContentSchema;

export const FILE_CONTENT_SCHEMA:string = "FILE";
export const OBJECT_CONTENT_SCHEMA:string = "OBJECT";