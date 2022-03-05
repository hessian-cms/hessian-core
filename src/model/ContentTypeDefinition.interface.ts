import { FileContentSchema } from "./schema/FileContentSchema.interface";

export default interface ContentTypeDefinition {
    name: string,
    schema: ObjectConstructor | FileContentSchema,
}