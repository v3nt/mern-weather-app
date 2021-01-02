const axios = require("axios");

// config the path to read the env files to get the weather api app.
require("dotenv").config({ path: "./../../../.env" });

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

class Weather {
  getWeatherData = async (zipCode, tempMetric) => {
    let url = `${baseUrl}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`;
    return (await axios(url)).data;
  };
}

module.exports = Weather;
