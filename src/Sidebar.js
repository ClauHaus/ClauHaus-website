import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTimes,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { sideBar, setSideBarOpen, language, setLanguage, theme, setTheme } =
    useGlobalContext();

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
    <section className={`sidebar ${sideBar}`}>
      <div className="title-container">
        <div className="title">
          <h3 className="sidebar-dashboard-title">ClauHaus</h3>
          <button className="bolt-dashboard">
            <FontAwesomeIcon icon={faBolt} />
          </button>
        </div>
        <div className="sidebar-btn-toggle">
          <button
            className="sidebar-btn-options"
            onClick={() => setSideBarOpen("")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <ul className="sidebar-options">
        {language === "english" && (
          <>
            <li>
              <button
                className={`sidebar-btn-top ${english}`}
                value="english"
                onClick={(e) => setLanguage(e.target.value)}
              >
                English
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish}`}
                value="spanish"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Spanish
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}`}
                value="german"
                onClick={(e) => setLanguage(e.target.value)}
              >
                German
              </button>
            </li>
          </>
        )}
        {language === "spanish" && (
          <>
            <li>
              <button
                className={`sidebar-btn-top ${english}`}
                value="english"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Inglés
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish}`}
                value="spanish"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Español
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}`}
                value="german"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Alemán
              </button>
            </li>
          </>
        )}
        {language === "german" && (
          <>
            <li>
              <button
                className={`sidebar-btn-top ${english}`}
                value="english"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Englisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish}`}
                value="spanish"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Spanisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}`}
                value="german"
                onClick={(e) => setLanguage(e.target.value)}
              >
                Deutsch
              </button>
            </li>
          </>
        )}
        <li>
          {theme === "light" && (
            <button
              className="sidebar-btn-top-theme"
              onClick={() => setTheme("dark")}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}
          {theme === "dark" && (
            <button
              className="sidebar-btn-top-theme"
              onClick={() => setTheme("light")}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
        </li>
        <li>
          <button className="sidebar-btn-top-theme">
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
