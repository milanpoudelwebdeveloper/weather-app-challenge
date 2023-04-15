import React, { createContext, useState } from "react";
import { units } from "../../constants/weatherInfo";

const initialState = {
  selectedUnit: units[0],
  changeUnit: () => {},
};

export const unitContext = createContext(initialState);

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
    <unitContext.Provider
      value={{
        selectedUnit,
        changeUnit,
      }}
    >
      {children}
    </unitContext.Provider>
  );
};

export default UnitContextProvider;
