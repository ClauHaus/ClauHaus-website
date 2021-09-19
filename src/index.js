import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
//IMPORT COMPONENTS
import Bolt from "./Bolt";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Connection from "./Connection";
import Dashboard from "./Dashboard";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
//IMPORT HOOKS
import useSound from "use-sound";
//IMPORT ARRAYS
import { dataAboutEn, dataAboutSp, dataAboutDe } from "./utils/dataAbout";
import {
  dataProjectsEn,
  dataProjectsSp,
  dataProjectsDe,
} from "./utils/dataProjects";
//IMPORT IMAGES
import aime1 from "./images/aime1.JPG";
import aime2 from "./images/aime2.JPG";
import aime3 from "./images/aime3.JPG";
import askaway from "./images/askaway.png";
import odyssey from "./images/odyssey.png";
import memory from "./images/memory.png";
import website from "./images/website.png";
//IMPORT SOUNDS
import clickLanguages from "./sounds/clickLanguages.mp3";
import close from "./sounds/close.mp3";
import pop from "./sounds/pop.mp3";
import themeSound from "./sounds/themeSound.mp3";
import thunder from "./sounds/thunder.mp3";
//IMPORT ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faBolt,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
  faBars,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export {
  //EXPORT COMPONENTS
  Bolt,
  About,
  Projects,
  Contact,
  Connection,
  Dashboard,
  Main,
  Sidebar,
  Footer,
  //EXPORT ICONS
  FontAwesomeIcon,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faMobileAlt,
  faBolt,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
  faSun,
  faMoon,
  faVolumeUp,
  faVolumeMute,
  faBars,
  faLink,
  //EXPORT HOOKS
  useSound,
  //EXPORT ARRAYS
  dataAboutEn,
  dataAboutSp,
  dataAboutDe,
  dataProjectsEn,
  dataProjectsSp,
  dataProjectsDe,
  //EXPORT IMAGES
  aime1,
  aime2,
  aime3,
  askaway,
  odyssey,
  memory,
  website,
  //EXPORT SOUNDS
  clickLanguages,
  close,
  pop,
  themeSound,
  thunder,
};
