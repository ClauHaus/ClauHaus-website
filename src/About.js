import React, { useState } from "react";
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
import { dataAboutEn, dataAboutSp, dataAboutDe } from "./utils/dataAbout";

const About = () => {
  const { language, setAbout } = useGlobalContext();
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="about" className="section-about">
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

          <button className="btn-close-about" onClick={() => setAbout(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="breaker"></div>
        <section className="about-text">
          {language === "english" &&
            dataAboutEn.map((item, itemIndex) => {
              const { id, title, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={position}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          {language === "spanish" &&
            dataAboutSp.map((item, itemIndex) => {
              const { id, title, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={position}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          {language === "german" &&
            dataAboutDe.map((item, itemIndex) => {
              const { id, title, text } = item;
              let position = "nextSlide";
              if (itemIndex === index) {
                position = "activeslide";
              }
              return (
                <article key={id} className={position}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
        </section>
      </section>
    </>
  );
};

export default About;
