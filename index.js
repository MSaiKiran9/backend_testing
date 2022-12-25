const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios");

const app = express()

app.use(
    cors({
        origin: "*"
    })
)

app.get("/", (req, res) => {
    res.json("Hi")
    res.end;
})

app.get("/home", (req, res) => {
    axios.get(process.env.url).then(resp => {
        res.json(resp.data.fact);
        res.end;
    }
    )
})

app.listen(process.env.port)