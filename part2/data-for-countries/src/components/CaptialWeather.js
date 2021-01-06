import React, { useState } from "react";
import axios from "axios";
import useCancelableAsync from "../hooks/useCancelableAsync.js";

export default function CaptialWeather({ capital }) {
  const access_key = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({});

  useCancelableAsync(
    (theAbortController) => {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${access_key}&query=${capital}`
        )
        .then((response) => {
          if (theAbortController.signal.aborted) return;
          setWeatherData(response.data);
        });
      return () => {};
    },
    [access_key, capital]
  );

  const getContent = () => {
    if (!!weatherData.current) {
      return (
        <>
          <div>
            <b>temperature:</b> {weatherData.current.temperature} Celsius
          </div>
          <div>
            <b>wind:</b> {weatherData.current.wind_speed} Kilometers/Hour
            direction {weatherData.current.wind_dir}
          </div>
          <img
            src={weatherData.current.weather_icons[0]}
            alt="weatherpicture"
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Weather in {capital} </h1>
      {getContent()}
    </div>
  );
}
