import Ajv, { JSONSchemaType } from "ajv";

//Typecheck in code json validation in runtime for Payload and Responses

const ajv = new Ajv()

export interface ObjectContentSchema<T> {
    type: "OBJECT",
    jsonSchema?: JSONSchemaType<T>
}

export async function validateObjectContentSchema<T>(objectContentSchema: ObjectContentSchema<T>, payload: T): Promise<void> {
    if (objectContentSchema.jsonSchema) {
        const validate = ajv.compile(objectContentSchema.jsonSchema)
        if (validate(payload)) {
            return
        } else {
            throw new Error("Incompatible Data")
        }
    }
}

