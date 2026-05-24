const express = require('express');
const app = express();
const { Pool } = require('pg');
const jwt = require("jsonwebtoken");
const PORT = 3000;
const JWT_SECRETE = "sujal";

const pool = new Pool({
    connectionString : ""
})

app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const response = await pool.query(`/Users/sujalsunilchaudhary/coding/web-dev-bootcamp/week-14
        `);

    if (!response.rows[0]) {
        res.json({ message : "signup failed"});
        return;
    }

    res.json({ message : "signup done", id : response.rows[0].id});

    
});

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    
    const response = await pool.query(`SELECT id FROM users
                                 WHERE username=$1 AND password=$2`, [username, password]);

    if (response.rowCount === 0) {
        res.status(403).json({ message : "invalid credentials"});
        return
    }

    const token = jwt.sign({
        id : response.rows[0].id
    }, JWT_SECRETE);

    res.json({ token : token});

});



app.listen(PORT, () => {
    console.log("the server is running on port " + PORT);
})