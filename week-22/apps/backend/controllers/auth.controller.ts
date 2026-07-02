import type { Request, Response } from 'express'
import { authSchema } from '../types/avatarSchema'
import { prisma } from '../prisma/db';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!;

export async function signUp(
    req: Request,
    res: Response
) {
    const { success, data } = authSchema.safeParse(req.body);
    
    if (!success) {
        res.status(411).json({ message : "incorrect inputs"})
        return;
    }
    
    const hashedPassword = await bcrypt.hash(data.password, 5);

    try {
        const user = await prisma.user.create({
            data : {
                username : data.username,
                password : hashedPassword
            }
        })
        
        res.status(200).json({ id : user.id });

    } catch (error) {
        res.status(411).json({ message : "this username is already exists try different one" });
    }
    
}

export async function signIn(
    req: Request,
    res: Response
) {
    const { success, data } = authSchema.safeParse(req.body);
    
    if (!success) {
        res.status(411).json({ message : "incorrect inputs"})
        return;
    }

    try {
        const user = await prisma.user.findFirst({
            where : {
                username: data.username
            }
        })

        
        if (!user) {
            res.status(411).json({ message : "invalid credentials (1)"});
            return
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password)

        if (!passwordMatch) {
            res.status(411).json({ message : "invalid credentials (2)"});
            return;
        }

        

        const token = jwt.sign({
            id : user.id
        }, JWT_SECRET);

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message : "there is problem while signin"});
        return;
    }

}

