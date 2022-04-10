import { MongoClient, Db, Collection } from "mongodb";

export class DBError extends Error { }

/**
 * @param {MongoClient} : Connection Client 
 * @param {dbName} : name of Db
 */
export default class Database {
    db: boolean | Db = false
    constructor(public mongoClient: MongoClient, private dbName: string) {
    }

    init = async () => {
        try {
            await this.mongoClient.connect()
            this.db = this.mongoClient.db(this.dbName)

        } catch (error) {
            console.log(error)
        }
    }

    checkInit = async () => {
        if (!this.isInitialized(this.db)) {
            await this.init()
        }
    }

    saveObject = async (collectionName: string, object: object) => {
        await this.checkInit();
        if (!this.isInitialized(this.db)) {
            return new DBError("DB not initalized, please check your connection")
        }
        const collection = this.db.collection(collectionName);
        const result = await collection.insertOne(object)
        return result
    }

    getObjectByName = async (collectionName: string, objectName: string) => {
        await this.checkInit();
        if (!this.isInitialized(this.db)) {
            return new DBError("DB not initalized, please check your connection")
        }
        const collection: Collection = this.db.collection(collectionName)
        return await collection.findOne({ name: objectName })
    }

    isInitialized = (db: boolean | Db): db is Db => {
        return (db as Db).databaseName !== undefined;
    }
}