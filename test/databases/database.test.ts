import Database from "../../src/databases/database/Database"

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
dotenv.config()

if (!process.env.DB_CONN_STRING) {
    throw new Error(".env.DB_CONN_STRING not defined")
}
const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);

const DB = new Database(client, "test_db")
describe("Mongo Server Testing", () => {
    test("Test insertOne and findOne", async () => {
        const result = await DB.saveObject("TEST_COLLECTION", { name: "TEST_OBJECT" }) as unknown as mongoDB.InsertOneResult
        const object = await DB.getObjectByName("TEST_COLLECTION", "TEST_OBJECT")
        expect.assertions(2)
        expect(result.acknowledged).toBe(true)
        expect(object?.name).toBe("TEST_OBJECT")
    })
})


