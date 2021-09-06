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

const Contact = () => {
  const { language, setContact } = useGlobalContext();
  return (
    <>
      {language === "english" && (
        <section id="contact" className="section-contact">
          <div className="header-about">
            <h3 className="header-subtitle">Contact</h3>
            <button
              className="btn-close-about"
              onClick={() => setContact(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "spanish" && (
        <section id="contact" className="section-contact">
          <div className="header-about">
            <h3 className="header-subtitle">Contacto</h3>
            <button
              className="btn-close-about"
              onClick={() => setContact(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "german" && (
        <section id="contact" className="section-contact">
          <div className="header-about">
            <h3 className="header-subtitle">Kontakt</h3>
            <button
              className="btn-close-about"
              onClick={() => setContact(false)}
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

export default Contact;
