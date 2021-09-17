import React from "react";
import { useGlobalContext } from "./context";
import useSound from "use-sound";
import close from "./sounds/close.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Connection = () => {
  const { language, closeConnection, closingConnection, sound } =
    useGlobalContext();

  const [playClose] = useSound(close, { volume: 0.5 });
  return (
    <>
      <section
        id="connection"
        className={`section-connection ${closingConnection}`}
      >
        {language === "english" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">Connect with me</h3>
              <button
                className="btn-close-right"
                onClick={() =>
                  sound ? (closeConnection(), playClose()) : closeConnection()
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <p className="social-text">
              If anything that you saw in this web catches your interest, you
              are more than welcome to follow me in these Social Networks.
            </p>
            <div className="connect-container-images">
              <a
                href="https://twitter.com/ClauHaus_"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.facebook.com/claudio.aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/clauhaus_/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/claudio-antonio-aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ClauHaus"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://codepen.io/claudio-aime"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </>
        )}
        {language === "spanish" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">Conectate conmigo</h3>
              <button
                className="btn-close-right"
                onClick={() =>
                  sound ? (closeConnection(), playClose()) : closeConnection()
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <p className="social-text">
              Si algo que viste en esta Web te llamo la atención, estás más que
              bienvenido a seguirme en estas redes sociales.
            </p>
            <div className="connect-container-images">
              <a
                href="https://twitter.com/ClauHaus_"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.facebook.com/claudio.aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/clauhaus_/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/claudio-antonio-aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ClauHaus"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://codepen.io/claudio-aime"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </>
        )}
        {language === "german" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">verbinde dich mit mir</h3>
              <button
                className="btn-close-right"
                onClick={() =>
                  sound ? (closeConnection(), playClose()) : closeConnection()
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <p className="social-text">
              Wenn etwas, das du in diesem Web gesehen haben, deine Interesse
              geweckt hat, du bist herzlich willkommen, mir in diesen sozialen
              Netzwerken zu folgen.
            </p>
            <div className="connect-container-images">
              <a
                href="https://twitter.com/ClauHaus_"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.facebook.com/claudio.aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/clauhaus_/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/claudio-antonio-aime/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ClauHaus"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://codepen.io/claudio-aime"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Connection;
