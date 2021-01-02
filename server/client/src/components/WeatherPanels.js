import React from "react";
import WeatherInfoPanel from "./WeatherInfoPanel";
import WeatherHistoryPanel from "./WeatherHistoryPanel";

const WeatherPanels = () => {
  return (
    <section className="weather-panels">
      <WeatherInfoPanel />
      <WeatherHistoryPanel />
    </section>
  );
};

export default WeatherPanels;
