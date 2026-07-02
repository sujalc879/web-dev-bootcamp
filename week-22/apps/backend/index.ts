import express from 'express'

import authRoutes from './routes/auth.route'
import avatarRoutes from './routes/avatar.route'
import videoRoutes from './routes/video.route'

import cors from 'cors'
import { authMiddleware } from './middleware/middleware'

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/api/v1/", authRoutes);
app.use(authMiddleware);

app.use("/api/v1/", avatarRoutes)
app.use("/api/v1/", videoRoutes)


app.listen(PORT, () => {
    console.log("the server is listning on Port " + PORT);
})