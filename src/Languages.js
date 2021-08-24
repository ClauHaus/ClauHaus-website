import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "./context";

const Languages = () => {
  const { language, setLanguage, theme, setTheme } = useGlobalContext();

  const [spanish, setSpanish] = useState("");
  const [english, setEnglish] = useState("");
  const [german, setGerman] = useState("");

  useEffect(() => {
    if (language === "english") {
      setEnglish("btn-clicked");
      setSpanish("");
      setGerman("");
    }
    if (language === "spanish") {
      setEnglish("");
      setSpanish("btn-clicked");
      setGerman("");
    }
    if (language === "german") {
      setEnglish("");
      setSpanish("");
      setGerman("btn-clicked");
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem("newLanguage", language);
    localStorage.setItem("newTheme", theme);
  }, [language, theme]);

  return (
    <section className="languages">
      {language === "english" && (
        <ul className="nav-top">
          <li>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Spanish
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              English
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              German
            </button>
          </li>
          <li>
            {theme === "light" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("dark")}
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
            )}
            {theme === "dark" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("light")}
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            )}
          </li>
        </ul>
      )}
      {language === "spanish" && (
        <ul className="nav-top">
          <li>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Español
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Inglés
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Alemán
            </button>
          </li>
          <li>
            {theme === "light" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("dark")}
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
            )}
            {theme === "dark" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("light")}
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            )}
          </li>
        </ul>
      )}
      {language === "german" && (
        <ul className="nav-top">
          <li>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Spanisch
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Englisch
            </button>
          </li>
          <li>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Deutsch
            </button>
          </li>
          <li>
            {theme === "light" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("dark")}
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
            )}
            {theme === "dark" && (
              <button
                className="btn-top-theme"
                onClick={() => setTheme("light")}
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            )}
          </li>
        </ul>
      )}
    </section>
  );
};

export default Languages;
