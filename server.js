const express = require("express");
const dotenv = require('dotenv');
const db = require("./helpers/db/db");
const app = express();
dotenv.config();

// db connection

(async () => {

    // connect to db

    await db.init();

})()

app.get("/",(req,res) => {
    res.status(200).json({ message : "Hello world" })
})

app.listen(process.env.PORT || 3000,() => {
    console.log(`app is up on port ${process.env.PORT}`);
});