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

export default class Cache {

}