import logo from "./logo.svg";
import "./App.css";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const { number } = useGlobalContext();
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Arranca a labura vago! {number}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
