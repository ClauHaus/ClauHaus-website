import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import themeSound from "./sounds/themeSound.mp3";
import clickLanguages from "./sounds/clickLanguages.mp3";
import thunder from "./sounds/thunder.wav";
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
  const {
    setSideBarOpen,
    language,
    setLanguage,
    theme,
    setTheme,
    sound,
    setSound,
    applyThunder,
    thunderOpacity,
  } = useGlobalContext();

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

  const [playPop] = useSound(pop, { volume: 0.5 });
  const [playthemeSound] = useSound(themeSound, { volume: 0.5 });
  const [playLanguages] = useSound(clickLanguages, { volume: 0.5 });
  const [playThunder] = useSound(thunder, { volume: 0.5 });

  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

  const soundPop = () => {
    playthemeSound();
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <section>
      <div className="title-container">
        <div className="title">
          <h3 className={`dashboard-title ${thunderOpacity}`}>ClauHaus</h3>
          <button
            className={`bolt-dashboard ${thunderOpacity}`}
            onClick={() =>
              sound ? (applyThunder(), playThunder()) : applyThunder()
            }
          >
            <FontAwesomeIcon icon={faBolt} />
          </button>
        </div>
        {language === "english" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english} ${thunderOpacity}`}
              value="english"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              English
            </button>
            <button
              className={`btn-top ${spanish} ${thunderOpacity}`}
              value="spanish"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Spanish
            </button>
            <button
              className={`btn-top ${german} ${thunderOpacity}`}
              value="german"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              German
            </button>
          </div>
        )}
        {language === "spanish" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english} ${thunderOpacity}`}
              value="english"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Inglés
            </button>
            <button
              className={`btn-top ${spanish} ${thunderOpacity}`}
              value="spanish"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Español
            </button>
            <button
              className={`btn-top ${german} ${thunderOpacity}`}
              value="german"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Alemán
            </button>
          </div>
        )}
        {language === "german" && (
          <div className="btn-container">
            <button
              className={`btn-top ${english} ${thunderOpacity}`}
              value="english"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Englisch
            </button>
            <button
              className={`btn-top ${spanish} ${thunderOpacity}`}
              value="spanish"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Spanisch
            </button>
            <button
              className={`btn-top ${german} ${thunderOpacity}`}
              value="german"
              onClick={(e) =>
                sound
                  ? (setLanguage(e.target.value), playLanguages())
                  : setLanguage(e.target.value)
              }
            >
              Deutsch
            </button>
          </div>
        )}
        <div className="special-buttons">
          {theme === "light" && (
            <button
              className={`btn-top-theme ${thunderOpacity}`}
              onClick={() => (sound ? soundPop() : setTheme("dark"))}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}
          {theme === "dark" && (
            <button
              className={`btn-top-theme ${thunderOpacity}`}
              onClick={() => (sound ? soundPop() : setTheme("light"))}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
          <button
            className={`btn-top-theme ${thunderOpacity}`}
            onClick={() => makeSound()}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp} />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} />
            )}
          </button>
        </div>
        <div className={`btn-toggle ${thunderOpacity}`}>
          <button
            className="options"
            onClick={() => setSideBarOpen("sidebar-open")}
          >
            <FontAwesomeIcon icon={faBars} className={`${thunderOpacity}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
