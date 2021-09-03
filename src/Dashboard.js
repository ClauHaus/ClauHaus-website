import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBolt,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { setSideBarOpen, language, setLanguage, theme, setTheme } =
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
    <section>
      <div className="title-container">
        <div className="title">
          <h3 className="dashboard-title">ClauHaus</h3>
          <button className="bolt-dashboard">
            <FontAwesomeIcon icon={faBolt} />
          </button>
        </div>
        {language === "english" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              English
            </button>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Spanish
            </button>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              German
            </button>
          </div>
        )}
        {language === "spanish" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Inglés
            </button>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Español
            </button>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Alemán
            </button>
          </div>
        )}
        {language === "german" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english}`}
              value="english"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Englisch
            </button>
            <button
              className={`btn-top ${spanish}`}
              value="spanish"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Spanisch
            </button>
            <button
              className={`btn-top ${german}`}
              value="german"
              onClick={(e) => setLanguage(e.target.value)}
            >
              Deutsch
            </button>
          </div>
        )}
        <div className="special-buttons">
          {theme === "light" && (
            <button className="btn-top-theme" onClick={() => setTheme("dark")}>
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}
          {theme === "dark" && (
            <button className="btn-top-theme" onClick={() => setTheme("light")}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
          <button className="btn-top-theme">
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        </div>
        <div className="btn-toggle">
          <button
            className="options"
            onClick={() => setSideBarOpen("sidebar-open")}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
