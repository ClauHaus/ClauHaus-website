import React, { useState } from "react";
import { useGlobalContext } from "./context";
import {
  //HOOKS
  useSound,
  //SOUNDS
  close,
  clickLanguages,
  //ARRAYS
  dataProjectsEn,
  dataProjectsSp,
  dataProjectsDe,
  //ICONS
  FontAwesomeIcon,
  faChevronLeft,
  faChevronRight,
  faLink,
  faTimes,
  faGithub,
} from "./index";

const Projects = () => {
  const { language, closingProjects, closeProjects, sound, setFooter } =
    useGlobalContext();

  const [index, setIndex] = useState(0);

  const nextPage = () => {
    if (
      index < dataProjectsEn.length - 1 ||
      index < dataProjectsSp.length - 1 ||
      index < dataProjectsDe.length - 1
    )
      setIndex(index + 1);
    else {
      setIndex(0);
    }
  };

  const prevPage = () => {
    if (index > 0) setIndex(index - 1);
    else {
      if (language === "english") {
        setIndex(dataProjectsEn.length - 1);
      }
      if (language === "spanish") {
        setIndex(dataProjectsSp.length - 1);
      }
      if (language === "german") {
        setIndex(dataProjectsDe.length - 1);
      }
    }
  };

  const [playClose] = useSound(close, { volume: 0.5 });
  const [playLanguages] = useSound(clickLanguages, { volume: 0.5 });

  const closeSound = () => {
    closeProjects();
    playClose();
    setFooter("");
  };

  const prevSound = () => {
    prevPage();
    playLanguages();
  };

  const nextSound = () => {
    nextPage();
    playLanguages();
  };

  return (
    <>
      <section id="projects" className={`section-projects ${closingProjects}`}>
        <div className="header-about">
          {language === "english" && (
            <h3 className="header-subtitle">Projects</h3>
          )}
          {language === "spanish" && (
            <h3 className="header-subtitle">Proyectos</h3>
          )}
          {language === "german" && (
            <h3 className="header-subtitle">Projekte</h3>
          )}
          <button
            className="btn-close-right"
            onClick={() => (sound ? closeSound() : closeProjects())}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="breaker"></div>
        <section>
          {language === "english" &&
            dataProjectsEn.map((item, itemIndex) => {
              const { id, image, title, text, link, repository } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`projects-article ${position}`}>
                  <div className="projects-content">
                    <h2>{title}</h2>
                    <p className="projects-text">{text}</p>
                    <div className="link-container">
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faLink} /> Launch
                      </a>
                      <a
                        href={repository}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faGithub} /> Repository
                      </a>
                    </div>
                  </div>
                  <img src={image} alt="Projects" className="projects-image" />
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? prevSound() : prevPage())}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? nextSound() : nextPage())}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </article>
              );
            })}
          {language === "spanish" &&
            dataProjectsSp.map((item, itemIndex) => {
              const { id, image, title, text, link, repository } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`projects-article ${position}`}>
                  <div className="projects-content">
                    <h2>{title}</h2>
                    <p className="projects-text">{text}</p>
                    <div className="link-container">
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faLink} /> Lanzar
                      </a>
                      <a
                        href={repository}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faGithub} /> Repositorio
                      </a>
                    </div>
                  </div>
                  <img src={image} alt="Projects" className="projects-image" />
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? prevSound() : prevPage())}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? nextSound() : nextPage())}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </article>
              );
            })}
          {language === "german" &&
            dataProjectsDe.map((item, itemIndex) => {
              const { id, image, title, text, link, repository } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`projects-article ${position}`}>
                  <div className="projects-content">
                    <h2>{title}</h2>
                    <p className="projects-text">{text}</p>
                    <div className="link-container">
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faLink} /> Start
                      </a>
                      <a
                        href={repository}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-links"
                      >
                        <FontAwesomeIcon icon={faGithub} /> Repository
                      </a>
                    </div>
                  </div>
                  <img src={image} alt="Projects" className="projects-image" />
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? prevSound() : prevPage())}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => (sound ? nextSound() : nextPage())}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </>
  );
};

export default Projects;
