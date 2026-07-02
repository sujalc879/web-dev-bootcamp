import express from "express";
const app = express();

app.use(express.json());

// enums
enum ResponseStatus {
    success = 200,
    NotFound = 404,
    error = 500
}

app.post("/signup", (req, res) => {

    res.status(ResponseStatus.NotFound).json({ message : "you are not good"});
})

app.listen(3000);