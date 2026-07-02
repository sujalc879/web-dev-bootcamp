import { Router } from 'express'
import { createAvatar, getAllAvatars } from '../controllers/avatar.controller';
const router = Router();

router.post("/avatar", createAvatar);
router.get("/avatars", getAllAvatars);

export default router;