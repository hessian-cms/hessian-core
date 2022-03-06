import { Processes } from "./Processes.interface";

export const validateProcess = (process:Processes) => new Promise<"OK">((resolve, reject) => {
    resolve("OK");
})