import React, { createContext, useState } from "react";
import { units } from "../constants/weatherInfo";

const initialState = {
  selectedUnit: units[0],
  changeUnit: () => {},
};

export const UnitContext = createContext(initialState);

const UnitContextProvider = ({ children }) => {
  const [selectedUnit, setSelectedUnit] = useState(initialState.selectedUnit);

  const changeUnit = () => {
    if (selectedUnit === units[0]) {
      setSelectedUnit(units[1]);
    } else {
      setSelectedUnit(units[0]);
    }
  };

  return (
    <UnitContext.Provider
      value={{
        selectedUnit,
        changeUnit,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContextProvider;
