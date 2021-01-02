require("dotenv").config();
var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//
const app = express();
const port = process.env.PORT ? process.env.PORT : 5000;

app.use(cors());

//use body parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use API routes
const apis = require("./api");
app.use("/api", apis);

// Connect to mongoose

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo CONNECTED"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`listening on port ${port}`));
