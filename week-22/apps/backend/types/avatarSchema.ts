import { z } from 'zod'
export const avatarSchema = z.object({
    name     :     z.string(),
    imageUrl :     z.string()
    
})

export const authSchema = z.object({
    username : z.string(),
    password : z.string()
})