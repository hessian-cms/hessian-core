import { ContentSchema } from "../../hessian";

export interface ContentTypeDefinition {
    displayName?: string,
    schema: ContentSchema,
    process?: string
}