import { FileContent } from "./FileContent.interface";
import { ObjectContent } from "./ObjectContent.interface";

export interface Content<T extends ObjectContent | FileContent> {
    id?: string;
    name?: string;
    payload: T;
    version?: number;
    history: T[];
    taxonomies?: {
        [taxonomy: string]: string[]
    }[]
}