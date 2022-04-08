// Require packages
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config()
const {PORT, BASE_URL, DB_URL} = process.env
const Mongo = require("./config/mongo.config");

// initialize packages
const app = express();
// parse application/x-www-form-urlenconded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// Routes
app.use("/api", require("./routes/home.route"));

// app.get("/", (req, res)=>{
//     res.send("Hello World")
// })

// Starter server
app.listen(PORT || 3000, async ()=>{
 Mongo(DB_URL)
    console.log(`the server is running on port ${BASE_URL}:${PORT}`);
});