const axios = require("axios");

const WEATHER = require("../models/Weather");

require("dotenv").config({ path: "./../../../.env" });

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

class Weather {
  getWeatherData = async (zipCode, tempMetric) => {
    /**
     * Use get api for "By ZIP code" (https://openweathermap.org/current#zip)
     * - The "us" query stands for "United States
     * - "process.env.WEATHER_KEY" is the api key that we get from the .env file
     * - "units" query can be either imperial (Fahrenheit) or metric (Celsius)
     */
    let url = `${baseUrl}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`;

    return (await axios(url)).data;
  };

  saveWeatherDataToMongo = async (zipCode, data) => {
    const filter = {
      zip: zipCode,
    };

    const replace = {
      ...filter,
      ...data,
      data: Date.now(),
    };
    await this.findOneReplace(filter, replace);
  };

  getWeatherDataFromMongo = async (zipCode) => {
    return WEATHER.findOne({ zip: zipCode });
  };

  getWeatherDataFromMongoAll = async () => {
    return WEATHER.find({});
  };

  /**
   * If a document already exists with the filter, then replace, if not, add.
   *
   * @param {{zip: number}} filter The filter is the zipcode used as unique identifier to find the document from mongo
   * @return {JSON} The data response from the mongodb.
   */
  async findOneReplace(filter, replace) {
    await WEATHER.findOneAndReplace(filter, replace, {
      new: true,
      upsert: true,
    });
  }
}

module.exports = Weather;
