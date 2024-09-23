const express = require("express");
const cors = require ("cors");
const bodyParser = require("body-parser");

const app = express();

const dogRouter = require("./routes/dogRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",dogRouter);

module.exports = app;