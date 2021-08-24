import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const selectedLanguage = localStorage.getItem("newLanguage");
  const selectedTheme = localStorage.getItem("newTheme");

  const [language, setLanguage] = useState(
    selectedLanguage ? selectedLanguage : "english"
  );
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]); //IMPORTANTE

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        setLanguage,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
