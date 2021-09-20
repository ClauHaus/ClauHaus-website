import React from "react";
import { useGlobalContext } from "./context";
import { useSound, pop } from "./index";

const Main = () => {
  const {
    language,
    openAbout,
    openProjects,
    openContact,
    openConnection,
    sectionOpacity,
    thunderMove,
    sound,
    setFooter,
  } = useGlobalContext();

  const [playPop] = useSound(pop, { volume: 0.5 });

  const openSound = (action) => {
    action();
    setFooter("footer-hide");
    playPop();
  };

  return (
    <section className="main">
      <div
        className={`section-title about ${sectionOpacity}${thunderMove}`}
        onClick={() => (sound ? openSound(openAbout) : openAbout())}
      >
        {language === "english" && <h3>About me</h3>}
        {language === "spanish" && <h3>Acerca de mí</h3>}
        {language === "german" && <h3>Über mich</h3>}
      </div>
      <div
        className={`section-title projects ${sectionOpacity}${thunderMove}`}
        onClick={() => (sound ? openSound(openProjects) : openProjects())}
      >
        {language === "english" && <h3>Projects</h3>}
        {language === "spanish" && <h3>Proyectos</h3>}
        {language === "german" && <h3>Projekte</h3>}
      </div>
      <div
        className={`section-title contact ${sectionOpacity}${thunderMove}`}
        onClick={() => (sound ? openSound(openContact) : openContact())}
      >
        {language === "english" && <h3>Contact</h3>}
        {language === "spanish" && <h3>Contacto</h3>}
        {language === "german" && <h3>Kontakt</h3>}
      </div>
      <div
        className={`section-title connection ${sectionOpacity}${thunderMove}`}
        onClick={() => (sound ? openSound(openConnection) : openConnection())}
      >
        {language === "english" && <h3>Connect with me</h3>}
        {language === "spanish" && <h3>Conectate conmigo</h3>}
        {language === "german" && <h3>verbinde dich mit mir</h3>}
      </div>
    </section>
  );
};

export default Main;
