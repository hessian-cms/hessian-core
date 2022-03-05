import { Schema } from "ajv";

export default interface ObjectContentSchema {
    type: "OBJECT",
    schema: Schema
}