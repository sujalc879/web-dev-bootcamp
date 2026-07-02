import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.route'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(PORT, async() => {
    console.log("Server is listning on port " + PORT);
})