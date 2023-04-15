import React, { useContext } from "react";
import "./UnitType.css";
import { units } from "../../constants/weatherInfo";
import { unitContext } from "../Context/unitContextProvider";

const UnitType = () => {
  const { selectedUnit, changeUnit } = useContext(unitContext);
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
