import Process from "./Process.interface";

const validateProcess = (process:Process) => new Promise<"OK">((resolve, reject) => {
    resolve("OK");
})

export default validateProcess;