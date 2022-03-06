import { validateProcesses, WrongEntryTarget, WrongTarget } from "../src/hessian";
import { NotReferenced } from "../src/model/process/errors";
import { INVALID_PROCESS_ENTRY_PROCESS_DEMO, INVALID_PROCESS_TARGET_DEMO, VALID_PROCESS_DEMO, INVALID_PROCESS_NO_REFERENCE_TO_STATE } from "./process.data";

describe("Process testing", () => {
    test("Valid Process", async () => {
        expect.assertions(1);
        expect(validateProcesses(VALID_PROCESS_DEMO)).resolves.toEqual(true);
    })

    test("Inavlid Process: wrong entry", async () => {
        expect.assertions(1);
        expect(validateProcesses(INVALID_PROCESS_ENTRY_PROCESS_DEMO)).rejects.toBeInstanceOf(WrongEntryTarget);
    })

    test("Invalid Process: wrong target", async () => {
        expect.assertions(1);
        expect(validateProcesses(INVALID_PROCESS_TARGET_DEMO)).rejects.toBeInstanceOf(WrongTarget);
    })

    test("Invalid Process: wrong target", async () => {
        expect.assertions(1);
        expect(validateProcesses(INVALID_PROCESS_NO_REFERENCE_TO_STATE)).rejects.toBeInstanceOf(NotReferenced);
    })
})