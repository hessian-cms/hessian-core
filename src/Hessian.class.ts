import { Content, Process } from "./hessian";
import { ContentTypeDefinition } from "./model/content/ContentTypeDefinition.interface";
import { FileContent } from "./model/content/FileContent.interface";
import { ObjectContent } from "./model/content/ObjectContent.interface";

export default class Hessian {
    addProcess(name: string, process: Process): Promise<Process> {
        console.log(name, process);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    updateProcess(name: string, process: Process): Promise<Process> {
        console.log(name, process);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    deleteProcess(name: string): Promise<Process> {
        console.log(name);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    getProcesses(): Promise<Process[]> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    getProcess(name: string): Promise<Process> {
        console.log(name);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    //* */
    addContentType(name: string, contentType: ContentTypeDefinition): Promise<ContentTypeDefinition> {
        console.log(name, contentType);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    updateContentType(name: string, contentType: ContentTypeDefinition): Promise<ContentTypeDefinition> {
        console.log(name, contentType);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    deleteContentType(name: string): Promise<ContentTypeDefinition> {
        console.log(name);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    getContentTypes(): Promise<ContentTypeDefinition[]> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    getContentType(name: string): Promise<ContentTypeDefinition> {
        console.log(name);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    /** */
    persistsObjectContent(contentType: string, content: Content<ObjectContent>): Promise<Content<ObjectContent>> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    persistFileContent(contentType: string, content: Content<FileContent>): Promise<Content<FileContent>> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    getContent(id: string): Promise<Content<ObjectContent | FileContent>> {
        console.log(id);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    deleteContent(id: string): Promise<Content<ObjectContent | FileContent>> {
        console.log(id);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    findContent(contentType: string, query:any): Promise<Content<ObjectContent | FileContent>[]> {
        console.log(contentType);
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }
}