import React from "react";
import { useGlobalContext } from "./context";

const Header = () => {
  const { language, image } = useGlobalContext();

  return (
    <section className="section top-section">
      <nav>
        {language === "english" && (
          <ul>
            <a href="#about">
              <li>About </li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        )}
        {language === "spanish" && (
          <ul>
            <a href="#about">
              <li>Acerca de mí</li>
            </a>
            <a href="#projects">
              <li>Proyectos</li>
            </a>
            <a href="#contact">
              <li>Contacto</li>
            </a>
          </ul>
        )}
        {language === "german" && (
          <ul>
            <a href="#about">
              <li>Über mich</li>
            </a>
            <a href="#projects">
              <li>Projekte</li>
            </a>
            <a href="#contact">
              <li>Kontakt</li>
            </a>
          </ul>
        )}
      </nav>
      <div className="breaker"></div>
      <section className=" header">
        <div className="image-container">
          <img src={image} alt="Claudio Aime" className="photo" />
        </div>
        <h1 className="main-title">Claudio Aime</h1>
        {language === "english" && (
          <p className="header-text">
            Hi and welcome! I'm Claudio also known as ClauHaus, self taught
            Front End Development student.
            <br></br> If you have a moment to spare let me show you a little bit
            of what i do.
          </p>
        )}
        {language === "spanish" && (
          <p className="header-text">
            Hola y bienvenidx! Soy Claudio también conocido como ClauHaus,
            estudiante autodidacta de Desarollo Front End.<br></br> Si tenes un
            momento, déjame mostrarte un poco de lo que hago.
          </p>
        )}
        {language === "german" && (
          <p className="header-text">
            Grüezi und willkommen! Mein Name ist Claudio, Autodidakt Front End
            Development Student .<br></br> Wenn du einen Moment Zeit haben,
            lässt du mich ein wenig von dem zeigen, was ich mache.
          </p>
        )}
      </section>
    </section>
  );
};

export default Header;
