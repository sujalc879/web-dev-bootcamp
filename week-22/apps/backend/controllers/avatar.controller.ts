import type { Request, Response } from 'express'
import { avatarSchema } from '../types/avatarSchema'
import { createImage } from '../lib/gemini';
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../lib/uploadImage';
import { prisma } from '../prisma/db';

export async function createAvatar(
    req: Request,
    res: Response
) {

    const userId = Number(req.userId);

    const { data, success } = avatarSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({ message: "invalid inputs" });
        return;
    }

    try {

    // returns buffer
    const [left, right, front] = await Promise.all([
        createImage("create a side profile for the left side. it should be a high quality portfolio shoot type photo. the background should be white & photo should be crystal clear", data.imageUrl),

        createImage("create a side profile for the right side. it should be a high quality portfolio shoot type photo. the background should be white & photo should be crystal clear", data.imageUrl),

        createImage("create a front profile for the user. it should be a high quality portfolio shoot type photo. the background should be white & photo should be crystal clear", data.imageUrl)
    ]);

    // use s3
    const avatarId = uuidv4();

    const [leftUrl, rightUrl, frontUrl] = await Promise.all([
        uploadImage(`avatars/${avatarId}/left.png`, left),
        uploadImage(`avatars/${avatarId}/right.png`, right),
        uploadImage(`avatars/${avatarId}/front.png`, front),
    ]);

    const avatar = await prisma.avatar.create({
        data: {
            userId,
            name: data.name
        }
    });

    await prisma.avatarImage.createMany({
        data: [
            {
                avatarId: avatar.id,
                type: "userGenerated",
                url: data.imageUrl
            },
            {
                avatarId: avatar.id,
                type: "modelGenerated",
                url: leftUrl
            },
            {
                avatarId: avatar.id,
                type: "modelGenerated",
                url: rightUrl
            },
            {
                avatarId: avatar.id,
                type: "modelGenerated",
                url: frontUrl
            }
        ]
    })

    res.status(200).json({
        messasge : "Avatar created Successfully",
        avatarId: avatar.id
    });

    } catch (err) {
   res.status(500).json({
      message: "Failed to create avatar"
   });
}


}

export async function getAllAvatars(
    req: Request,
    res: Response
) {
    const userId = Number(req.userId);

    try {
        const avatars = await prisma.avatar.findMany({
            where: {
                userId
            },
            include: {
                avatarImages: true
            }
        });

        res.status(200).json({ avatars })

    } catch (error) {
        res.status(411).json({ message : "there was a problem while getting all Avatars"});
        return;
    }

}