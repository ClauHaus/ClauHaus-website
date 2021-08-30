import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { language } = useGlobalContext();
  return (
    <>
      {language === "english" && (
        <section id="about" className="section">
          <h3>About Me</h3>
          <div className="breaker"></div>
          <p className="about-text">
            Originally from Argentina, living in Switzerland with several years
            of experience in team management and working groups growth through
            individual developments, I started the coding journey in 2020 with
            some basics and at the moment dwelling into the world of React. In
            this page you will find a couple of things I'm doing while learning.
            Highly recommend the courses of Javier Usobiaga (Domestika) and John
            Smilga (Udemy).
            <br></br> Just love cats, fossball and The Beatles.
          </p>
          <h4>Skills</h4>
          <div className="skills-container-images">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faMobileAlt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="skills-container-titles">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Responsive Web</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </section>
      )}
      {language === "spanish" && (
        <section id="about" className="section">
          <h3>Acerca de mí</h3>
          <div className="breaker"></div>
          <p className="about-text">
            Originario de Argentina, viviendo en Suiza con varios años de
            experiencia en gestión de equipos y crecimiento de grupos de trabajo
            a través de desarrollos individuales, comencé a programar en el 2020
            con algunos conceptos básicos y actualmente adentrandome en el mundo
            de React. En esta página encontrarás un par de cosas que estoy
            haciendo mientras sigo aprendiendo. Recomiendo fervientemente los
            cursos de Javier Usobiaga (Domestika) y John Smilga (Udemy).
            <br></br> Me encantan el metegol, los gatos y The Beatles.
          </p>
          <h4>Habilidades</h4>
          <div className="skills-container-images">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faMobileAlt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="skills-container-titles">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Responsive Web</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </section>
      )}
      {language === "german" && (
        <section id="about" className="section">
          <h3>Über mich</h3>
          <div className="breaker"></div>
          <p className="about-text">
            Ich komme aus Argentinien und lebe in der Schweiz , habe ich das
            Coding Journey im Jahr 2020 mit einigen Grundlagen angefangen und im
            Moment trete ich in die Welt von React. Auf dieser Seite findest du
            ein paar Sachen, die ich beim Lernen gemacht habe. Ich empfehle sehr
            die Kurse von Javier Usobiaga (Domestika) und John Smilga (Udemy).
            Ich gerne Tischfussball, Katzen und The Beatles.
          </p>
          <h4>Fähigkeiten</h4>
          <div className="skills-container-images">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faMobileAlt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="skills-container-titles">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Responsive Web</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
