import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./s3";

export async function uploadImage(
    key: string,
    buffer: Buffer
) {

    await s3.send(
        new PutObjectCommand({
            Bucket: process.env.S3_BUCKET!,
            Key: key,
            Body: buffer,
            ContentType: "image/png"
        })
    );

    return `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}