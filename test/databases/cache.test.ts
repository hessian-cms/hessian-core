import * as redis from "redis"
import dotenv from "dotenv"
dotenv.config()
const REDIS_PORT = process.env.REDIS_PORT || "6379"

const redisClient = redis.createClient({
    socket: {
        port: parseInt(REDIS_PORT),
        host: process.env.REDIS_HOST
    }
})

describe("Cache Server Testing", () => {
    test("Test", async () => {
        redisClient.connect()
        await redisClient.set("testKey", "testValue")
        const value = await redisClient.get("testKey")
        expect.assertions(1)
        expect(value).toBe("testValue")
    })
})