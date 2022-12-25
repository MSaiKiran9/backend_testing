const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios");


const app = express()

app.get("/", (req, res) => {
    res.json("Hi")
    res.end;
})

app.listen(8000)
