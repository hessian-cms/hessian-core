import { JSONSchemaType } from "ajv"
import { ObjectContentSchema } from "../src/hessian"
import { StateTransition } from "../src/model/process/StateTransition.interface"

//TEST DATA HAPPY PATH
export interface SomeContentType {
    id: number,
    creator: string,
    version: number,
    transitions: StateTransition[]
}

const schema: JSONSchemaType<SomeContentType> = {
    type: "object",
    properties: {
        id: { type: "number" },
        creator: { type: "string" },
        version: { type: "integer" },
        transitions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    target: { type: "string" },
                    allowedAttributes: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        nullable: true
                    }
                },
                required: ["target"]
            }
        }
    },
    required: ["creator", "id", "version", "transitions"],
    additionalProperties: false
}

export const OBJECT_CONTENT_SCHEMA: ObjectContentSchema<SomeContentType> = {
    type: "OBJECT",
    jsonSchema: schema
}

export const CORRECT_PAYLOAD: SomeContentType = {
    creator: "anon",
    id: 24124124,
    transitions: [{ target: "stateXY" }],
    version: 1
}


//TEST DATA SAD PATH
interface DefectContentType {
    noCreator: number
}

export const integer_schema: JSONSchemaType<DefectContentType> = {
    type: "object",
    properties: {
        noCreator: { type: "integer" }
    },
    required: ["noCreator"],
    additionalProperties: false
}

export const INTEGER_CONTENT_TYPE: ObjectContentSchema<DefectContentType> = {
    type: "OBJECT",
    jsonSchema: integer_schema
}

export const INCORRECT_PAYLOAD: DefectContentType = {
    noCreator: 2.20912,
}