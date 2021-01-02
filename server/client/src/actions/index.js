export const saveZipCode = (saveZipCode) => {
  return {
    type: "SAVE_ZIP",
    payload: saveZipCode,
  };
};

export const saveWeatherData = (data) => {
  return {
    type: "saveWeatherData",
    payload: data,
  };
};

export const saveTemperature = (data) => {
  return {
    type: "SAVE_TEMPERATURE",
    payload: data,
  };
};

export const updateHistory = (data) => {
  return {
    type: "UPDATE_HISTORY",
    payload: data,
  };
};
