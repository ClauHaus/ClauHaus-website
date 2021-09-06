import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const { language, setProjects } = useGlobalContext();
  return (
    <>
      {language === "english" && (
        <section id="projects" className="section-projects">
          <div className="header-about">
            <h3 className="header-subtitle">Projects</h3>
            <button
              className="btn-close-about"
              onClick={() => setProjects(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "spanish" && (
        <section id="projects" className="section-projects">
          <div className="header-about">
            <h3 className="header-subtitle">Proyectos</h3>
            <button
              className="btn-close-about"
              onClick={() => setProjects(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "german" && (
        <section id="projects" className="section-projects">
          <div className="header-about">
            <h3 className="header-subtitle">Projekte</h3>
            <button
              className="btn-close-about"
              onClick={() => setProjects(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
    </>
  );
};

export default Projects;
