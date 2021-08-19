import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [number, setNumber] = useState(32);

  return (
    <AppContext.Provider value={{ number }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
