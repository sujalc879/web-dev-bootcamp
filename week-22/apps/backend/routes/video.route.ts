import { Router } from 'express'
import { createVideo } from '../controllers/video.controller';
const router = Router();

router.post("/video", createVideo);

export default router;