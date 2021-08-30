import "./App.css";
import { useGlobalContext } from "./context";
import Bolt from "./Bolt";
import Languages from "./Languages";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Main from "./Main";

function App() {
  const { intro, website } = useGlobalContext();
  return (
    <section className="application">
      {intro && <Bolt />}
      {/* {website && (
        <>
          <Languages />
          <Header />
          <About />
          <Projects />
          <Contact />
        </>
      )} */}
      {website && (
        <>
          <Dashboard />
          <Main />
        </>
      )}
    </section>
  );
}

export default App;
