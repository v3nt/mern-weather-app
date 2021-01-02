// Use express's router
const express = require("express");
const router = express.Router();

const Weather = require("./weather");

// GET the data from the weather api
router.get("/weather", async (require, res) => {
  let weather = new Weather();
  let weatherData = await weather.getWeatherData(98052, "us");
  //

  res.header("Content-tye", "application/json");
  res.send(JSON.stringify(weatherData, null, 4));
});

// POST get data based on request body
router.post("/weather", async (res, req) => {
  const { zipCode, tempMetric } = req.body;
  let weather = new Weather();

  let weatherData = await weather.getWeatherData(zipCode, tempMetric);
  res.header("Content-Type", "applicaiton/json");
  res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = router;
