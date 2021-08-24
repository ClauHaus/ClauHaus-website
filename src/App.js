import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./context";
import Languages from "./Languages";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <section className="application">
      <Languages />
      <Header />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
