import { validateProcess, validateSubjectHasAccessToState } from "../src/hessian";
import { ProcessMissingEntryTarget, ProcessMissingTarget, NotReferencedStates } from "../src/model/process/process.errors";
import { INVALID_PROCESS_ENTRY_PROCESS_DEMO, INVALID_PROCESS_TARGET_DEMO, VALID_PROCESS_DEMO, INVALID_PROCESS_NO_REFERENCE_TO_STATE, SUBJECT_ADMIN, SUBJECT_WRITER } from "./process.data";


describe("Process testing", () => {
    test("Valid Process", () => {
        return expect(validateProcess(VALID_PROCESS_DEMO)).resolves.toEqual(true);
    })

    test("Inavlid Process: wrong entry", () => {
        return expect(validateProcess(INVALID_PROCESS_ENTRY_PROCESS_DEMO)).rejects.toBeInstanceOf(ProcessMissingEntryTarget);
    })

    test("Invalid Process: wrong target", () => {
        return expect(validateProcess(INVALID_PROCESS_TARGET_DEMO)).rejects.toBeInstanceOf(ProcessMissingTarget);
    })

    test("Invalid Process: Not referenced", () => {
        expect(validateProcess(INVALID_PROCESS_NO_REFERENCE_TO_STATE)).rejects.toBeInstanceOf(NotReferencedStates);
    })

    test("Valid Subject access accessableForAttributes not set", () => {
        return expect(validateSubjectHasAccessToState(SUBJECT_ADMIN, "stateDraft", VALID_PROCESS_DEMO))
            .resolves
            .toEqual(true);
    })

    test("Valid Subject access accessableForAttributes set to 'admin'", () => {
        return expect(validateSubjectHasAccessToState(SUBJECT_ADMIN, "stateArchived", VALID_PROCESS_DEMO))
            .resolves
            .toEqual(true);
    })

    test("Valid invalid Subject access", () => {
        return expect(validateSubjectHasAccessToState(SUBJECT_WRITER, "stateArchived", VALID_PROCESS_DEMO))
            .resolves
            .toEqual(true);
    })
})