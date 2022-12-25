const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios");


const app = express()
app.use(cors({
    origin: "https://msaikiran9.github.io"
}))
app.get("/", (req, res) => {
    res.send("welcome")
})

app.get("/home", (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.key,
            'X-RapidAPI-Host': process.env.host
        },
        data: '{"input":[0,0,8,9,0,0,4,0,0,0,0,5,6,0,0,0,0,0,3,0,0,7,0,0,6,0,9,5,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,6,5,0,0,2,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,8,9,0,0,0,7,0,4,0,0,2,0,0]}'
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})


app.get("/", (req, res) => {
    res.json("Hi")
    res.end;
})

app.listen(8000)
