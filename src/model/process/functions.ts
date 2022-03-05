import { Process } from "./Process.interface";

export const validateProcess = (process:Process) => new Promise<"OK">((resolve, reject) => {
    resolve("OK");
})