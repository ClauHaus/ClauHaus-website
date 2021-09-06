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

const Connection = () => {
  const { language, setConnection } = useGlobalContext();
  return (
    <>
      {language === "english" && (
        <section id="connection" className="section-connection">
          <div className="header-about">
            <h3 className="header-subtitle">Connection</h3>
            <button
              className="btn-close-about"
              onClick={() => setConnection(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "spanish" && (
        <section id="connection" className="section-connection">
          <div className="header-about">
            <h3 className="header-subtitle">Conexión</h3>
            <button
              className="btn-close-about"
              onClick={() => setConnection(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="breaker"></div>
        </section>
      )}
      {language === "german" && (
        <section id="connection" className="section-connection">
          <div className="header-about">
            <h3 className="header-subtitle">Verbindung</h3>
            <button
              className="btn-close-about"
              onClick={() => setConnection(false)}
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

export default Connection;
