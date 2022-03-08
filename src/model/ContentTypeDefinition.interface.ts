import { ObjectContentSchema } from "../hessian";
import { FileContentSchema } from "./schema/FileContentSchema.interface";

export default interface ContentTypeDefinition<S, T extends ObjectContentSchema<S> | FileContentSchema> {
    name: string,
    schema: T,
}