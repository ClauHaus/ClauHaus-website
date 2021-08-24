import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="section">
      <h3>About Me</h3>
      <div className="breaker"></div>
      <p className="about-text">
        Hi and welcome to my page! I'm originally from Argentina, living in
        Switzerland. I started the coding journey in 2020 with some basics and
        at the moment dwelling into the world of React. In this page you will
        find a couple of things I did while learning. Highly recommend the
        courses of Javier Usobiaga (Domestika) and John Smilga (Udemy).
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
  );
};

export default About;
