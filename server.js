const express = require("express");
const dotenv = require('dotenv');
const app = express();
dotenv.config();



app.get("/",(req,res) => {
    res.status(200).json({ message : "Hello world" })
})

app.listen(process.env.PORT || 3000,() => {
    console.log(`app is up on port ${process.env.PORT}`);
});