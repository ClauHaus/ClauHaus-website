import React, { useState, useEffect, useContext } from "react";
import clauhaus from "./images/clauhaus.png";
import clau from "./images/clau.png";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [intro, setIntro] = useState(true);
  const [website, setWebsite] = useState(false);
  const [about, setAbout] = useState(false);
  const [sideBar, setSideBarOpen] = useState("");
  const [image, setImage] = useState(clauhaus);

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
        image,
        sideBar,
        about,
        setLanguage,
        setTheme,
        startWeb,
        setImage,
        setSideBarOpen,
        setAbout,
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
