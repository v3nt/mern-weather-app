import React, { useState } from "react";

import WeatherForm from "./WeatherForm";
import WeatherPanels from "./WeatherPanels";

const Container = () => {
  // const [count, setCount] = useState(0);
  const weatherData = useState("");
  return (
    <section className="weather container">
      <WeatherForm />
      {/* <WeatherPanels weatherData={weatherData} /> */}
    </section>
  );
};

export default Container;
