import { ObjectContentSchema } from "../hessian";
import { FileContentSchema } from "./schema/FileContentSchema.interface";

export default interface ContentTypeDefinition<T extends ObjectContentSchema | FileContentSchema> {
    name: string,
    schema: T,
}