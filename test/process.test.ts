import { validateProcess } from "../src/hessian";
import { ProcessMissingEntryTarget, ProcessMissingTarget, NotReferencedStates } from "../src/model/process/process.errors";
import { INVALID_PROCESS_ENTRY_PROCESS_DEMO, INVALID_PROCESS_TARGET_DEMO, VALID_PROCESS_DEMO, INVALID_PROCESS_NO_REFERENCE_TO_STATE } from "./process.data";


describe("Process testing", () => {
    test("Valid Process", async () => {
        expect.assertions(1);
        expect(validateProcess(VALID_PROCESS_DEMO)).resolves.toEqual(true);
    })

    test("Inavlid Process: wrong entry", async () => {
        expect.assertions(1);
        expect(validateProcess(INVALID_PROCESS_ENTRY_PROCESS_DEMO)).rejects.toBeInstanceOf(ProcessMissingEntryTarget);
    })

    test("Invalid Process: wrong target", async () => {
        expect.assertions(1);
        expect(validateProcess(INVALID_PROCESS_TARGET_DEMO)).rejects.toBeInstanceOf(ProcessMissingTarget);
    })

    test("Invalid Process: Not referenced", async () => {
        expect.assertions(1);
        expect(validateProcess(INVALID_PROCESS_NO_REFERENCE_TO_STATE)).rejects.toBeInstanceOf(NotReferencedStates);
    })
})