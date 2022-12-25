const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios");

const app = express()

app.use(
    cors({
        origin: "https://msaikiran9.github.io/Sudoku_Solver9x9/"
    })
)

app.get("/", (req, res) => {
    res.json("Hi")
    res.end;
})

app.get("/home", (req, res) => {
    axios("https://catfact.ninja/fact").then((resp) => {
        res.json(resp.data.fact);
        res.end;
    })
})

app.listen(process.env.port)