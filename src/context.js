import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [intro, setIntro] = useState(true);
  const [website, setWebsite] = useState(false);
  const [sideBar, setSideBarOpen] = useState("");
  const [about, setAbout] = useState(false);
  const [closingAbout, setClosingAbout] = useState("");
  const [projects, setProjects] = useState(false);
  const [closingProjects, setClosingProjects] = useState("");
  const [contact, setContact] = useState(false);
  const [closingContact, setClosingContact] = useState("");
  const [connection, setConnection] = useState(false);
  const [closingConnection, setClosingConnection] = useState("");
  const [sectionOpacity, setSectionOpacity] = useState("");
  const [thunderMove, setThunderMove] = useState("");
  const [thunderOpacity, setThunderOpacity] = useState("");
  const [thunderOpacitySidebar, setThunderOpacitySidebar] = useState("");
  const [footer, setFooter] = useState("");
  const [clauShow, setClauShow] = useState("");
  const [clauShowSidebar, setClauShowSidebar] = useState("");

  const selectedLanguage = localStorage.getItem("newLanguage");
  const selectedTheme = localStorage.getItem("newTheme");
  const selectedSound = localStorage.getItem("newSound");

  const [language, setLanguage] = useState(
    selectedLanguage ? selectedLanguage : "english"
  );

  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "light");

  const [sound, setSound] = useState(selectedSound ? selectedSound : true);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]); //IMPORTANTE!

  const startWeb = () => {
    setIntro(false);
    setWebsite(true);
  };

  const openAbout = () => {
    setAbout(true);
    setClosingAbout("");
    setSectionOpacity("section-title-opacity");
  };

  const closeAbout = () => {
    setClosingAbout("closingAbout");
    setSectionOpacity("");
    setTimeout(() => {
      setAbout(false);
    }, 500);
  };

  const openProjects = () => {
    setProjects(true);
    setClosingProjects("");
    setSectionOpacity("section-title-opacity");
  };

  const closeProjects = () => {
    setClosingProjects("closingProjects");
    setSectionOpacity("");
    setTimeout(() => {
      setProjects(false);
    }, 500);
  };

  const openContact = () => {
    setContact(true);
    setClosingContact("");
    setSectionOpacity("section-title-opacity");
  };

  const closeContact = () => {
    setClosingContact("closingContact");
    setSectionOpacity("");
    setTimeout(() => {
      setContact(false);
    }, 500);
  };

  const openConnection = () => {
    setConnection(true);
    setClosingConnection("");
    setSectionOpacity("section-title-opacity");
  };

  const closeConnection = () => {
    setClosingConnection("closingConnection");
    setSectionOpacity("");
    setTimeout(() => {
      setConnection(false);
    }, 500);
  };

  const applyThunder = () => {
    setThunderMove("thunder-move");
    setThunderOpacity("thunder-opacity");
    setThunderOpacitySidebar("thunder-opacity-sidebar");
    setClauShow("clau-mov-show");
    setClauShowSidebar("clau-mov-show-sidebar");
    setTimeout(() => {
      setThunderMove("");
      setThunderOpacity("");
      setThunderOpacitySidebar("");
      setClauShow("");
      setClauShowSidebar("");
    }, 3500);
    // return () => clearTimeout(thunderTime);
  };

  return (
    <AppContext.Provider
      value={{
        intro,
        website,
        theme,
        language,
        sound,
        sideBar,
        about,
        projects,
        contact,
        connection,
        closingAbout,
        closingProjects,
        closingContact,
        closingConnection,
        sectionOpacity,
        thunderMove,
        thunderOpacity,
        thunderOpacitySidebar,
        footer,
        clauShow,
        clauShowSidebar,
        setLanguage,
        setTheme,
        setSound,
        startWeb,
        setSideBarOpen,
        setAbout,
        setProjects,
        setContact,
        setConnection,
        openAbout,
        closeAbout,
        openProjects,
        closeProjects,
        openContact,
        closeContact,
        openConnection,
        closeConnection,
        applyThunder,
        setFooter,
        setClauShow,
        setClauShowSidebar,
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
