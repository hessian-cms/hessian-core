import { RedisClientType } from "@node-redis/client"
import { createClient } from "redis"
import { REDIS_CONNECTION_URL } from "./redis.config";

const TEST_KEY: string = "key";
const TEST_VALUE: string = "value";

describe("Redis connection tests", () => {
    let client: RedisClientType;

    beforeAll(async () => {
        client = createClient({
            url: REDIS_CONNECTION_URL
        });
        await client.connect()
    })

    afterAll(async () => {
        await client.quit();
    })

    // Just adding a Value, then checkig if it has proper value
    test("Test connection", async () => {
        await client.set(TEST_KEY, TEST_VALUE);
        const result: string | null = await client.get(TEST_KEY);
        return expect(result).toEqual(TEST_VALUE);
    })
})