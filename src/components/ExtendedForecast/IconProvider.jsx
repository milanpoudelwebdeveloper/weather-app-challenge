import React from "react";

const IconProvider = ({ iconNumber }) => {
  function getIconName(iconNumber) {
    switch (iconNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "sunny.svg";
      case 5:
      case 6:
      case 7:
      case 8:
        return "partly-cloudy.svg";
      case 11:
      case 12:
      case 13:
      case 14:
        return "rain.svg";
      case 15:
      case 16:
      case 17:
        return "thunderstorm.svg";
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        return "snow.svg";
      case 23:
      case 24:
      case 25:
        return "sleet.svg";
      case 26:
      case 29:
      case 30:
      case 44:
        return "haze.svg";
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
        return "windy.svg";
      case 37:
      case 38:
      case 39:
      case 40:
        return "heavy-rain.svg";
      default:
        return "sunny.svg";
    }
  }

  return <img src={`/images/${getIconName(iconNumber)}`} alt="weather icon" />;
};

export default IconProvider;
