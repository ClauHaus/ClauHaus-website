import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [intro, setIntro] = useState(true);
  const [website, setWebsite] = useState(false);
  const [sideBar, setSideBarOpen] = useState("");
  const [about, setAbout] = useState(false);
  const [aboutClass, setAboutClass] = useState("");
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [connection, setConnection] = useState(false);

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

  const openAbout = () => {
    setAbout(true);
    setAboutClass("");
  };

  const closeAbout = () => {
    // setAbout(false);
    setAboutClass("closeAbout");
  };

  return (
    <AppContext.Provider
      value={{
        intro,
        website,
        theme,
        language,
        sideBar,
        about,
        projects,
        contact,
        connection,
        setLanguage,
        setTheme,
        startWeb,
        setSideBarOpen,
        setAbout,
        setProjects,
        setContact,
        setConnection,
        aboutClass,
        openAbout,
        closeAbout,
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
