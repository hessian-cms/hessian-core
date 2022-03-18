import { Collection, Db, MongoClient, ObjectId, Document } from "mongodb"
import { MONGO_CONNECTION_URL, MONGO_PASSWORD, MONGO_USERNAME } from "./mongo.config";

const TEST_DB_NAME: string = "test";
const TEST_COLLECTION_NAME: string = "test_collection";

interface Person extends Document {
    name: string;
    forename: string;
}

const DEMO_PERSON: Person = {
    name: "Doe",
    forename: "John"
}

describe("MongoDB connection tests", () => {
    let client: MongoClient;
    let db: Db;
    let collection: Collection<Person>;

    beforeAll(async () => {
        client = await MongoClient.connect(MONGO_CONNECTION_URL, {
            auth: {
                username: MONGO_USERNAME,
                password: MONGO_PASSWORD
            }
        });
        db = client.db(TEST_DB_NAME);
        collection = db.collection(TEST_COLLECTION_NAME);
    })

    afterAll(async () => {
        await collection.drop();
        await db.dropDatabase();
        await client.close();
    })

    test("Insert and Delete", async () => {
        const id: ObjectId = (await collection.insertOne(DEMO_PERSON)).insertedId;
        const deletedCount = (await collection.deleteOne({_id: id})).deletedCount;

        return expect(deletedCount).toBeGreaterThan(0);
    })
})