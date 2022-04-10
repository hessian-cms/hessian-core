import Minio = require("minio")
import fs from "fs"
import path = require("path")
import MinioWrapper from "../../../src/databases/container/Container"

const MINIO_TEST_BUCKET_NAME = "pictures"
const TEST_IMAGE_NAME = "phoca-download-r.png"

const minioClient = new Minio.Client({
    endPoint: "localhost",
    port: 9000,
    useSSL: false,
    accessKey: "root",
    secretKey: "password"
})

beforeEach(async () => {
    await minioClient.makeBucket(MINIO_TEST_BUCKET_NAME, "Germany West Central")
})

afterEach(async () => {
    const wrapper = new MinioWrapper(minioClient)
    await wrapper.cleanBucket(MINIO_TEST_BUCKET_NAME)
    await minioClient.removeBucket(MINIO_TEST_BUCKET_NAME)
})


describe("Min.io Server Testing", () => {
    test("Create Bucket =>Server Should contain one Bucket", async () => {

        minioClient.makeBucket("some", "eu-west", (err) => {
            if (err) {
                return console.log("Error creating bucket", err);
            }
        })
        //sync event loop
        await new Promise((r) => setTimeout(r, 500))
        expect.assertions(1);

        minioClient.listBuckets((error, buckets) => {
            if (error) {
                return console.log(error)
            } else {
                expect(buckets.filter(bucket => bucket.name === "some").length).toBe(1)
            }
        })
        //sync event loop
        await new Promise((r) => setTimeout(r, 500))

        minioClient.removeBucket("some", (err) => {
            if (err) {
                return console.log(err)
            }
        })
    })

    test("MinioWrapper upload image and retrieve it afterwards", async () => {
        const wrapper = new MinioWrapper(minioClient)
        const file = path.join(__dirname, `/testdata/${TEST_IMAGE_NAME}`)
        const readStream = fs.createReadStream(file)

        await wrapper.put(MINIO_TEST_BUCKET_NAME, readStream, TEST_IMAGE_NAME,)
        expect.assertions(1)

        const object = await wrapper.findObject(MINIO_TEST_BUCKET_NAME, TEST_IMAGE_NAME)

        expect(object.name).toBe(TEST_IMAGE_NAME)

    })
})