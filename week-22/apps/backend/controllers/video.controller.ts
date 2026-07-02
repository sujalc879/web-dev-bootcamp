import type { Request, Response } from 'express'
import { generateVideo } from '../lib/openrouter'
export async function createVideo(
    req: Request,
    res: Response
) {
    generateVideo()
    res.json({})
}