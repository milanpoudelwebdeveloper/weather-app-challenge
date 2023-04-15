import React, { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axiosConfig";
import "./ExtendedForecast.css";
import IconProvider from "./IconProvider";

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
        {extendedForecast.slice(0, 4).map((forecast, index) => {
          return (
            <div key={index}>
              <IconProvider iconNumber={forecast?.Day?.Icon} />
              <h3>{getDay(forecast?.Date)}</h3>
              <p className="description">{forecast?.Day?.IconPhrase}</p>
              <p>{forecast?.Temperature?.Maximum?.Value} &deg; C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtendedForecast;
