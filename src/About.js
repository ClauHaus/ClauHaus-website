import React, { useState } from "react";
import { useGlobalContext } from "./context";
import {
  //ICONS
  FontAwesomeIcon,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faMobileAlt,
  //HOOKS
  useSound,
  //ARRAYS
  dataAboutEn,
  dataAboutSp,
  dataAboutDe,
  //SOUNDS
  close,
  clickLanguages,
} from "./index";

const About = () => {
  const { language, closeAbout, closingAbout, sound, setFooter } =
    useGlobalContext();

  const [index, setIndex] = useState(0);

  const nextPage = () => {
    if (
      index < dataAboutEn.length - 1 ||
      index < dataAboutSp.length - 1 ||
      index < dataAboutDe.length - 1
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
        setIndex(dataAboutEn.length - 1);
      }
      if (language === "spanish") {
        setIndex(dataAboutSp.length - 1);
      }
      if (language === "german") {
        setIndex(dataAboutDe.length - 1);
      }
    }
  };

  const closeSound = () => {
    closeAbout();
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

  const [playClose] = useSound(close, { volume: 0.5 });
  const [playLanguages] = useSound(clickLanguages, { volume: 0.5 });

  return (
    <>
      <section id="about" className={`section-about ${closingAbout}`}>
        <div className="header-about">
          {language === "english" && (
            <h3 className="header-subtitle">About Me</h3>
          )}
          {language === "spanish" && (
            <h3 className="header-subtitle">Acerca de mí</h3>
          )}
          {language === "german" && (
            <h3 className="header-subtitle">Über mich</h3>
          )}
          <button
            className="btn-close-left"
            onClick={() => (sound ? closeSound() : closeAbout())}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="breaker"></div>
        <section>
          {language === "english" &&
            dataAboutEn.map((item, itemIndex) => {
              const { id, image, text, skills } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <div className="projects-content">
                    <p className="about-text">{text}</p>
                    {skills ? (
                      <section className="skills-container">
                        <h2>Skills</h2>
                        <div className="skills-container-images">
                          <FontAwesomeIcon icon={faHtml5} />
                          <FontAwesomeIcon icon={faCss3} />
                          <FontAwesomeIcon icon={faJs} />
                          <FontAwesomeIcon icon={faReact} />
                          <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <div className="skills-container-titles">
                          <h4>HTML5</h4>
                          <h4>CSS3</h4>
                          <h4>JavaScript</h4>
                          <h4>React</h4>
                          <h4>Responsive</h4>
                        </div>
                      </section>
                    ) : (
                      <p></p>
                    )}
                  </div>
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
            dataAboutSp.map((item, itemIndex) => {
              const { id, image, text, skills } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <div className="projects-content">
                    <p className="about-text">{text}</p>
                    {skills ? (
                      <section className="skills-container">
                        <h2>Habilidades</h2>
                        <div className="skills-container-images">
                          <FontAwesomeIcon icon={faHtml5} />
                          <FontAwesomeIcon icon={faCss3} />
                          <FontAwesomeIcon icon={faJs} />
                          <FontAwesomeIcon icon={faReact} />
                          <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <div className="skills-container-titles">
                          <h4>HTML5</h4>
                          <h4>CSS3</h4>
                          <h4>JavaScript</h4>
                          <h4>React</h4>
                          <h4>Responsive</h4>
                        </div>
                      </section>
                    ) : (
                      <p></p>
                    )}
                  </div>
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
            dataAboutDe.map((item, itemIndex) => {
              const { id, image, text, skills } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <div className="projects-content">
                    <p className="about-text">{text}</p>
                    {skills ? (
                      <section className="skills-container">
                        <h2>Fähigkeiten</h2>
                        <div className="skills-container-images">
                          <FontAwesomeIcon icon={faHtml5} />
                          <FontAwesomeIcon icon={faCss3} />
                          <FontAwesomeIcon icon={faJs} />
                          <FontAwesomeIcon icon={faReact} />
                          <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <div className="skills-container-titles">
                          <h4>HTML5</h4>
                          <h4>CSS3</h4>
                          <h4>JavaScript</h4>
                          <h4>React</h4>
                          <h4>Responsive</h4>
                        </div>
                      </section>
                    ) : (
                      <p></p>
                    )}
                  </div>
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

export default About;
