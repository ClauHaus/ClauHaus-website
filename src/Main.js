import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTimes,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import About from "./About";

const Main = () => {
  const {
    language,
    about,
    setAbout,
    setProjects,
    setContact,
    setConnection,
    aboutClass,
    openAbout,
    openProjects,
    openContact,
    openConnection,
    sectionOpacity,
    thunderMove,
  } = useGlobalContext();
  // const [aboutTitle, setAboutTitle] = useState("About me");
  return (
    <section className="main">
      <div
        className={`section-title about ${sectionOpacity}${thunderMove}`}
        onClick={() => openAbout()}
        // onMouseEnter={() => setAboutTitle("ClauHaus")}
        // onMouseEnter={() => setTitle("ClauHaus")}
      >
        {language === "english" && <h3>About me</h3>}
        {language === "spanish" && <h3>Acerca de mí</h3>}
        {language === "german" && <h3>Über mich</h3>}
      </div>
      <div
        className={`section-title projects ${sectionOpacity}${thunderMove}`}
        onClick={() => openProjects()}
      >
        {language === "english" && <h3>Projects</h3>}
        {language === "spanish" && <h3>Proyectos</h3>}
        {language === "german" && <h3>Projekte</h3>}
      </div>
      <div
        className={`section-title contact ${sectionOpacity}${thunderMove}`}
        onClick={() => openContact()}
      >
        {language === "english" && <h3>Contact</h3>}
        {language === "spanish" && <h3>Contacto</h3>}
        {language === "german" && <h3>Kontakt</h3>}
      </div>
      <div
        className={`section-title connection ${sectionOpacity}${thunderMove}`}
        onClick={() => openConnection()}
      >
        {language === "english" && <h3>Connect with me</h3>}
        {language === "spanish" && <h3>Conectate conmigo</h3>}
        {language === "german" && <h3>verbinde dich mit mir</h3>}
      </div>
    </section>
  );
};

export default Main;
