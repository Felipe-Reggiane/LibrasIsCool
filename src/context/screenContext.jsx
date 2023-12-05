import React, { createContext, useState } from "react";

const ScreenContext = createContext();

const ScreenContextProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const value = [currentScreen, setCurrentScreen];

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenContextProvider };
