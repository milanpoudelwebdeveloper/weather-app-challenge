import React from "react";
import "./Details.css";

const DetailCards = ({ weatherData }) => {
  const details = [
    {
      id: "1",
      title: "Temperature",
      value: weatherData?.Temperature?.Metric?.Value || 0,
      unit: weatherData?.Temperature?.Metric?.Unit || "C",
    },
    {
      id: "2",
      title: "Humidity",
      value: weatherData?.RelativeHumidity || 0,
      unit: "%",
    },
    {
      id: "3",
      title: "Visibility",
      value: weatherData?.Visibility?.Metric?.Value || 0,
      unit: weatherData?.Visibility?.Metric?.Unit || "Km",
    },
    {
      id: "4",
      title: "Pressure",
      value: weatherData?.Pressure?.Metric?.Value || 0,
      unit: weatherData?.Pressure?.Metric?.Unit || "mb",
    },
    {
      id: "5",
      title: "Wind Speed",
      value: weatherData?.Wind?.Speed?.Metric?.Value || 0,
      unit: weatherData?.Wind?.Speed?.Metric?.Unit || "Km/h",
    },
    {
      id: "6",
      title: "Dew Point",
      value: weatherData?.DewPoint?.Metric?.Value || 0,
      unit: weatherData?.DewPoint?.Metric?.Unit || "C",
    },
  ];
  return (
    <div className="detailCards">
      <h2>Today's Highlights</h2>
      <div className="gridContainer">
        {details?.map((item) => (
          <div className="gridItem" key={item?.id}>
            <p>{item.title}</p>
            <p className="itemValue">{item.value}</p>
            <p className="itemUnit">{item.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCards;
