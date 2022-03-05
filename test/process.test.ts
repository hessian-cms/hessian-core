describe("test", () => {
    test("default", async () => {
        expect.assertions(1);
        expect(true).toBe(true);
    })

    test("default 2", async () => {
        expect.assertions(1);
        expect(true).toBe(false);
    })
})