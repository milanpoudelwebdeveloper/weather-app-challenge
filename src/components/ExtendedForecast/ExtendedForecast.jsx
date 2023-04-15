import React, { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axiosConfig";
import "./ExtendedForecast.css";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ExtendedForecast = ({ locationKey }) => {
  const [extendedForecast, setExtendedForecast] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const getDay = (date) => {
    const day = new Date(date).getDay();
    return daysOfWeek[day];
  };

  useEffect(() => {
    if (locationKey) {
      axiosInstance
        .get(
          `/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`
        )
        .then((res) => {
          setExtendedForecast(res.data.DailyForecasts);
          console.log(res.data.DailyForecasts);
        })
        .catch((e) => {
          console.log("something went wrong while getting data", e);
        });
    }
  }, [locationKey]);

  return (
    <div className="extended-forecast">
      <h2>Extended Forecast</h2>
      <div className="forecast-items">
        {extendedForecast.map((forecast, index) => {
          return (
            <div key={index}>
              <img
                src={`https://developer.accuweather.com/sites/default/files/${forecast.Day.Icon}-s.png`}
                alt="weather icon"
              />
              <h3>{getDay(forecast.Date)}</h3>
              <p>{forecast.Temperature.Maximum.Value} C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtendedForecast;
