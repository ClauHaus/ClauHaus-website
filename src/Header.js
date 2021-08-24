import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clauhaus from "./images/clauhaus.png";
import clau from "./images/clau.png";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { language } = useGlobalContext();
  const [image, setImage] = useState(clauhaus);

  const changeImage = () => {
    if (image === clauhaus) {
      setImage(clau);
    } else {
      setImage(clauhaus);
    }
  };

  return (
    <section className="section top-section">
      <nav>
        {language === "english" && (
          <ul>
            <li>
              <button className="bolt" onClick={() => changeImage()}>
                <FontAwesomeIcon icon={faBolt} />
              </button>
            </li>
            <a href="#about">
              <li>About Me</li>
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
            <li>
              <button className="bolt" onClick={() => changeImage()}>
                <FontAwesomeIcon icon={faBolt} />
              </button>
            </li>
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
            <li>
              <button className="bolt" onClick={() => changeImage()}>
                <FontAwesomeIcon icon={faBolt} />
              </button>
            </li>
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
        <h1 className="main-title">ClauHaus</h1>
        {language === "english" && (
          <p className="header-text">
            My name is Claudio Aime and I'm a self taught Front End Development
            student.<br></br> I speak spanish, english and i'm studying german.
            Love learning new stuff, cats, 8 Bits, foosball and The Beatles.
          </p>
        )}
        {language === "spanish" && (
          <p className="header-text">
            Mi nombre es Claudio Aime y soy un estudiante autodidacta de
            Desarollo Front End.<br></br> Hablo español, inglés y estoy
            estudiando alemán. Me encanta aprender cosas nuevas, gatos, 8 Bits,
            el metegol y The Beatles.
          </p>
        )}
        {language === "german" && (
          <p className="header-text">
            Mein Name ist Claudio Aime und ich bin ein Autodidakt Front End
            Development Student .<br></br> Ich spreche Spanisch, Englisch und
            ich lerne Deutsch. Ich lerne gerne neue Sachen, Katzen, 8 Bits,
            Tischfussball und The Beatles .
          </p>
        )}
      </section>
    </section>
  );
};

export default Header;
