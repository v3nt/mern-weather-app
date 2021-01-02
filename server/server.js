require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT ? process.env.PORT : 5000;

//use body parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use API routes
const apis = require("./api");
app.use("/api", apis);

app.listen(port, () => console.log(`listening on port ${port}`));
