import express from 'express';
const app = express();

app.use(express.json());

interface SignupInput {
    username : string,
    password : string
}

app.post("/signup", (req, res) => {
    const body: SignupInput = req.body;

})

app.listen(3000);