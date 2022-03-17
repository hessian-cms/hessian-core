import { validateObjectContentSchema } from "../src/model/content/schema/ObjectContentSchema.interface";
import { CORRECT_PAYLOAD, INCORRECT_PAYLOAD, INTEGER_CONTENT_TYPE, OBJECT_CONTENT_SCHEMA } from "./objectContentSchema.data";

describe("Process testing", () => {
    test("Valid Object Content Schema", async () => {
        expect.assertions(1);
        expect(validateObjectContentSchema(OBJECT_CONTENT_SCHEMA, CORRECT_PAYLOAD)).resolves.not.toThrow();
    })

    test("Incorrect paload: Integer_Content_Type expects Integer but gets number. Schould reject", async () => {
        expect.assertions(1);
        expect(validateObjectContentSchema(INTEGER_CONTENT_TYPE, INCORRECT_PAYLOAD)).rejects.toBeInstanceOf(Error);
    })
})