require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT


app.get("/", (req, res) => {
    res.send(`app runnign on this port ${port}`)
})

app.listen(port, () => {
    console.log(`system running on port ${port}`);
})