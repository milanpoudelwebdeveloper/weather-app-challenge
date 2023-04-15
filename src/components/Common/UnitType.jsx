import React, { useContext } from "react";
import "./UnitType.css";
import { units } from "../../constants/weatherInfo";
import { UnitContext } from "../../Context/UnitContextProvider";

const UnitType = () => {
  const { selectedUnit, changeUnit } = useContext(UnitContext);
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
