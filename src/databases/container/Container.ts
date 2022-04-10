import Minio = require("minio")
import internal = require("stream")

export interface MinioObject {
    name: string,
    lastModified: Date,
    etag: string,
    size: number
}

export default class MinioWrapper {

    constructor(public client: Minio.Client) { }

    put = async (bucketName: string, filestream: internal.Readable, objectName: string) => {
        await this.client.putObject(bucketName, objectName, filestream)
    }

    findObject = async (bucketName: string, objectName: string): Promise<MinioObject> => {
        return new Promise<MinioObject>((resolve, reject) => {
            const data: MinioObject[] = []
            const stream = this.client.listObjects(bucketName)
            stream.on("data", (blob) => data.push(blob))
            stream.on("end", () => {
                const object = data.filter((obj) => obj.name === objectName)
                if (object.length === 1) {
                    resolve(object[0])
                } else {
                    reject("Object not in bucket")
                }
            })
            stream.on("error", reject)
        })
    }

    cleanBucket = async (bucketName: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const blobs: MinioObject[] = []
            const stream = this.client.listObjects(bucketName)
            stream.on("data", (blob) => {
                blobs.push(blob)
            })
            stream.on("end", async () => {
                try {
                    await this.client.removeObjects(bucketName, blobs.map(blob => blob.name))
                    resolve()
                } catch (error) {
                    reject(error)
                }
            })
            stream.on("error", (error) => reject(error))
        })
    }
}

