import React, { useEffect } from "react";
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
        <div className="btn-container">
          <button className="btn-top">English</button>
          <button className="btn-top">Spanish</button>
          <button className="btn-top">German</button>
        </div>
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
