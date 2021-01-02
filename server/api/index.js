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

// POST Request - get the weather data from the api, save it to mongo, then return the data back
router.post("/weatherMongo", async (req, res) => {
  const { zipCode, tempMetric } = req.body;
  let weather = new Weather();
  let weatherData = await weather.getWeatherData(zipCode, tempMetric);

  await weather.saveWeatherDataToMongo(zipCode, weatherData);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(weatherData, null, 4));
});

// GET Request - get the weather data saved from Mongo
// http://localhost:5000/api/weatherMongo?zipCode=98052
router.get("/weatherMongo", async (req, res) => {
  const { zipCode } = req.query;
  let weather = new Weather();

  let weatherData = await weather.getWeatherData(zipCode);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = router;
