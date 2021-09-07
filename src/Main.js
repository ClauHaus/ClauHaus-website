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
  } = useGlobalContext();
  // const [aboutTitle, setAboutTitle] = useState("About me");
  return (
    <section className="main">
      <div
        className="section-title about"
        onClick={() => openAbout()}
        // onMouseEnter={() => setAboutTitle("ClauHaus")}
        // onMouseEnter={() => setTitle("ClauHaus")}
      >
        {language === "english" && <h3>About me</h3>}
        {language === "spanish" && <h3>Acerca de mí</h3>}
        {language === "german" && <h3>Über mich</h3>}
      </div>
      <div className="section-title projects" onClick={() => setProjects(true)}>
        {language === "english" && <h3>Projects</h3>}
        {language === "spanish" && <h3>Proyectos</h3>}
        {language === "german" && <h3>Projekte</h3>}
      </div>
      <div className="section-title contact" onClick={() => setContact(true)}>
        {language === "english" && <h3>Contact</h3>}
        {language === "spanish" && <h3>Contacto</h3>}
        {language === "german" && <h3>Kontakt</h3>}
      </div>
      <div
        className="section-title connection"
        onClick={() => setConnection(true)}
      >
        {language === "english" && <h3>Connection</h3>}
        {language === "spanish" && <h3>Conexión</h3>}
        {language === "german" && <h3>Verbindung</h3>}
      </div>
    </section>
  );
};

export default Main;
