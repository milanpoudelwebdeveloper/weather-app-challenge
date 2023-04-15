import React from "react";
import "./UnitType.css";
import { units } from "../../constants/weatherInfo";

const UnitType = ({ changeUnit, selectedUnit }) => {
  return (
    <div className="unit-container">
      {units?.map((unit) => (
        <button
          key={unit}
          className={
            selectedUnit === unit ? "unit-button selected" : "unit-button"
          }
          onClick={changeUnit}
        >
          &deg; {unit}
        </button>
      ))}
    </div>
  );
};

export default UnitType;
