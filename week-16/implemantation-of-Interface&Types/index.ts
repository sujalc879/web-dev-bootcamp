import express from 'express'
const { Pool } = require('pg');
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const z = require('zod');
const JWT_SECRETE = "sujal";

const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_U8bZYzi3DaRP@ep-odd-cake-am8dh4cq-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

app.use(express.json());

const inputSchema = z.object({
    username : z.string().min(3).max(50),
    password : z.string().min(3).max(200)
});

app.post("/signup", async (req:Request, res:Response) => {

    const validInput = inputSchema.safeParse(req.body);
    if (!validInput.success) {
        res.json({ error :  JSON.stringify(validInput.error) })
        return
    };
    
    const hashedPassword = await bcrypt.hash(validInput.data.password, 5);

    try {
    const response = await pool.query(`INSERT INTO users(username, password)
                                                   VALUES($1, $2) RETURNING id`, [validInput.data.username, hashedPassword]);
    
    res.json({ message : "signup done", id : response.rows[0].id});

    } catch (error) {
        res.status(403).json({ message : "this user is already exist"});
        
    }

    

});

app.post("/signin", async (req, res) => {
    interface SigninBody {
    username: string;
    password: string;
}
    const { username, password }:SigninBody = req.body;

    const response = await pool.query(`SELECT * FROM users 
                                       WHERE username=$1`, [username]);

    if (response.rowCount === 0) {
        res.status(403).json({ message : "invalid credentials"});
        return;
    }

    const passwordCorrect = await bcrypt.compare(password, response.rows[0].password);
    
    if (!passwordCorrect) {
        res.status(403).json({ message : "invalid credentials"});
        return;
    }

    interface JwtPayload {
    id: number;
}

    const jwtPayload:JwtPayload = {
        id : response.rows[0].id
    }

    const token = jwt.sign(jwtPayload, JWT_SECRETE);
    
    res.json({ token : token});

});


app.listen(PORT, () => {
    console.log("the server is listning on port " + PORT);
});