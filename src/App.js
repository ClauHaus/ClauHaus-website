import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./context";
import Bolt from "./Bolt";
import Languages from "./Languages";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const { intro, website } = useGlobalContext();
  return (
    <section className="application">
      {intro && <Bolt />}
      {website && (
        <>
          <Languages />
          <Header />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </section>
  );
  return (
    <section className="application">
      <Bolt />
      <Languages />
      <Header />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
