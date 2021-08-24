import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [intro, setIntro] = useState(true);
  const [website, setWebsite] = useState(false);

  const selectedLanguage = localStorage.getItem("newLanguage");
  const selectedTheme = localStorage.getItem("newTheme");

  const [language, setLanguage] = useState(
    selectedLanguage ? selectedLanguage : "english"
  );
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]); //IMPORTANTE

  const startWeb = () => {
    setIntro(false);
    setWebsite(true);
  };

  return (
    <AppContext.Provider
      value={{
        intro,
        website,
        theme,
        language,
        setLanguage,
        setTheme,
        startWeb,
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
