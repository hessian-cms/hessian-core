import { Schema } from "ajv";

export interface ObjectContentSchema {
    type: "OBJECT",
    schema: Schema
}