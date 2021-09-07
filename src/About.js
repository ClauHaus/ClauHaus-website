import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { dataAboutEn, dataAboutSp, dataAboutDe } from "./utils/dataAbout";

const About = () => {
  const { language, setAbout, closeAbout, aboutClass } = useGlobalContext();
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

  return (
    <>
      <section id="about" className={`section-about ${aboutClass}`}>
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

          <button className="btn-close-about" onClick={() => closeAbout()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="breaker"></div>
        <section>
          {language === "english" &&
            dataAboutEn.map((item, itemIndex) => {
              const { id, image, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <p className="about-text">{text}</p>
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => prevPage()}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => nextPage()}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </article>
              );
            })}
          {language === "spanish" &&
            dataAboutSp.map((item, itemIndex) => {
              const { id, image, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <p className="about-text">{text}</p>
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => prevPage()}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => nextPage()}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </article>
              );
            })}
          {language === "german" &&
            dataAboutDe.map((item, itemIndex) => {
              const { id, image, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={`about-article ${position}`}>
                  <img src={image} alt="Claudio Aime" className="about-image" />
                  <p className="about-text">{text}</p>
                  <div className="breaker-down">
                    <button
                      className="chevron-style"
                      onClick={() => prevPage()}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                      className="chevron-style"
                      onClick={() => nextPage()}
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
