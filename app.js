require("dotenv").config();
require("./config/mongoDbConnect");
const cors = require('cors')
const express = require("express");
//const cors = require('cors') //authorization multiple app communicate with different ports

// define routes
const userRoute = require("./routes/userRoute")
const indexRoute = require("./routes/indexRoute")


const app = express();



//app.use(cors())
app.use(express.json());
app.use(cors());

app.use("/api/user",userRoute);
app.use("/api",indexRoute);
// Logic goes here








module.exports = app;