import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import {
  //HOOKS
  useSound,
  //SOUNDS
  pop,
  themeSound,
  clickLanguages,
  thunder,
  //IMAGES
  clauMov,
  //ICONS
  FontAwesomeIcon,
  faBolt,
  faTimes,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
} from "./index";

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
    thunderOpacitySidebar,
    clauShowSidebar,
  } = useGlobalContext();

  const [spanish, setSpanish] = useState("");
  const [english, setEnglish] = useState("");
  const [german, setGerman] = useState("");

  useEffect(() => {
    if (language === "english") {
      setEnglish("btn-clicked-sidebar");
      setSpanish("");
      setGerman("");
    }
    if (language === "spanish") {
      setEnglish("");
      setSpanish("btn-clicked-sidebar");
      setGerman("");
    }
    if (language === "german") {
      setEnglish("");
      setSpanish("");
      setGerman("btn-clicked-sidebar");
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

  const thunderSound = () => {
    applyThunder();
    playThunder();
  };

  const languageSound = (e) => {
    setLanguage(e.target.value);
    playLanguages();
  };

  return (
    //Revisar esta classname
    <section className={`sidebar ${sideBar} ${thunderOpacitySidebar}`}>
      <div className="title-container">
        <div className="title">
          <h3 className={`sidebar-dashboard-title ${thunderOpacitySidebar}`}>
            ClauHaus
          </h3>
          <button
            className={`bolt-dashboard ${thunderOpacity}`}
            onClick={() => (sound ? thunderSound() : applyThunder())}
          >
            <FontAwesomeIcon icon={faBolt} />
          </button>
        </div>
        <div className="sidebar-btn-toggle">
          <button
            className={`sidebar-btn-options ${thunderOpacitySidebar}`}
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
                className={`sidebar-btn-top ${english} ${thunderOpacitySidebar}`}
                value="english"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                English
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderOpacitySidebar}`}
                value="spanish"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                Spanish
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}${thunderOpacitySidebar}`}
                value="german"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
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
                className={`sidebar-btn-top ${english}${thunderOpacitySidebar}`}
                value="english"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                Inglés
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderOpacitySidebar}`}
                value="spanish"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                Español
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german}${thunderOpacitySidebar}`}
                value="german"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
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
                className={`sidebar-btn-top ${english}${thunderOpacitySidebar}`}
                value="english"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                Englisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${spanish} ${thunderOpacitySidebar}`}
                value="spanish"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
                }
              >
                Spanisch
              </button>
            </li>
            <li>
              <button
                className={`sidebar-btn-top ${german} ${thunderOpacitySidebar}`}
                value="german"
                onClick={(e) =>
                  sound ? languageSound(e) : setLanguage(e.target.value)
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
              className={`sidebar-btn-top-theme ${thunderOpacitySidebar}`}
              onClick={() => (sound ? soundPop() : setTheme("dark"))}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          )}
          {theme === "dark" && (
            <button
              className={`sidebar-btn-top-theme ${thunderOpacitySidebar}`}
              onClick={() => (sound ? soundPop() : setTheme("light"))}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
        </li>
        <li>
          <button
            className={`sidebar-btn-top-theme ${thunderOpacitySidebar}`}
            onClick={() => makeSound()}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp} />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} />
            )}
          </button>
        </li>
        <li>
          <img
            src={clauMov}
            alt=""
            className={`clau-mov-sidebar ${clauShowSidebar}`}
          />
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
