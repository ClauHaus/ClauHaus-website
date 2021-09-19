import "./App.css";
import { useGlobalContext } from "./context";
import {
  //COMPONENTS
  Bolt,
  About,
  Projects,
  Contact,
  Connection,
  Dashboard,
  Main,
  Sidebar,
  Footer,
} from "./index";

function App() {
  const { intro, website, about, projects, contact, connection, thunderMove } =
    useGlobalContext();
  return (
    <section className="application">
      {intro && <Bolt />}
      {website && (
        <>
          <section className={`introduction ${thunderMove}`}>
            <Dashboard />
            <Main />
          </section>
          {about && <About />}
          {projects && <Projects />}
          {contact && <Contact />}
          {connection && <Connection />}
          <Sidebar />
          <Footer />
        </>
      )}
    </section>
  );
}

export default App;
