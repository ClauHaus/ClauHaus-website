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
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
  const { intro, website, about } = useGlobalContext();
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
          {about && <About />}
          <Sidebar />
          <Footer />
        </>
      )}
    </section>
  );
}

export default App;
