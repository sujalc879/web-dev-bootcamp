import type { Request, Response} from 'express'
import { prisma } from '../prisma/db';

export async function register(
    req: Request,
    res: Response
) {
    const { username, password } = req.body;

    try {
        await prisma.user.create({
            data : {
                username,
                password
            }
        });
    
        res.status(200).json({ message : "signup done"});
        
    } catch (error) {
        res.status(403).json({ message : "the user is already exist"})
    }

    
};

export async function login(
    req: Request,
    res: Response
) {

};

