import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import themeSound from "./sounds/themeSound.mp3";
import clickLanguages from "./sounds/clickLanguages.mp3";
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
  const {
    sideBar,
    setSideBarOpen,
    language,
    setLanguage,
    theme,
    setTheme,
    sound,
    setSound,
    applyThunder,
    thunderOpacity,
    thunderMove,
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
    <section className={`sidebar ${sideBar} ${thunderMove}`}>
      <div className="title-container">
        <div className="title">
          <h3 className={`sidebar-dashboard-title ${thunderOpacity}`}>
            ClauHaus
          </h3>
          <button
            className={`bolt-dashboard ${thunderOpacity}`}
            onClick={() => applyThunder()}
          >
            <FontAwesomeIcon icon={faBolt} />
          </button>
        </div>
        <div className="sidebar-btn-toggle">
          <button
            className={`sidebar-btn-options ${thunderOpacity}`}
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
                className={`sidebar-btn-top ${english} ${thunderMove}`}
                value="english"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                English
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderMove}`}
                value="spanish"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Spanish
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}${thunderMove}`}
                value="german"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
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
                className={`sidebar-btn-top ${english}${thunderMove}`}
                value="english"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Inglés
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderMove}`}
                value="spanish"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Español
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}${thunderMove}`}
                value="german"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
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
                className={`sidebar-btn-top ${english}${thunderMove}`}
                value="english"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Englisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderMove}`}
                value="spanish"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Spanisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german} ${thunderMove}`}
                value="german"
                onClick={(e) =>
                  sound
                    ? (setLanguage(e.target.value), playLanguages())
                    : setLanguage(e.target.value)
                }
              >
                Deutsch
              </button>
            </li>
          </>
        )}
        <li>
          {theme === "light" && (
            <button
              className={`sidebar-btn-top-theme ${thunderMove}`}
              onClick={() => (sound ? soundPop() : setTheme("dark"))}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}
          {theme === "dark" && (
            <button
              className={`sidebar-btn-top-theme ${thunderMove}`}
              onClick={() => (sound ? soundPop() : setTheme("light"))}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
        </li>
        <li>
          <button
            className={`sidebar-btn-top-theme ${thunderMove}`}
            onClick={() => makeSound()}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp} />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} />
            )}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
