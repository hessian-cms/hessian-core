import { Process } from "./hessian";
import { ContentTypeDefinition } from "./model/ContentTypeDefinition.interface";

export default class Hessian {
    addProcess(name: string, process: Process): Promise<Process> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    updateProcess(name: string, process: Process): Promise<Process> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    deleteProcess(name: string): Promise<Process> {
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
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    //* */
    addContentType(name: string, contentType: ContentTypeDefinition): Promise<ContentTypeDefinition> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    updateContentType(name: string, contentType: ContentTypeDefinition): Promise<ContentTypeDefinition> {
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }

    deleteContentType(name: string): Promise<ContentTypeDefinition> {
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
        return new Promise(
            (resolve, reject) => reject(new Error("Not imeplemented"))
        )
    }
}