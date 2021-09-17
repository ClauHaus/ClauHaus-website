import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Bolt = () => {
  const { startWeb } = useGlobalContext();
  const [first, setFirst] = useState("l");
  const [second, setSecond] = useState("u");
  const [last, setLast] = useState("s");

  const changeFirst = ["1", "L", "l", "ļ"];
  const changeSecond = ["u", "Ü", "U", "ü"];
  const changeLast = ["s", "ß", "$", "s"];

  useEffect(() => {
    let interval = setInterval(() => {
      setFirst(changeFirst[Math.floor(Math.random() * changeFirst.length)]);
      setSecond(changeSecond[Math.floor(Math.random() * changeSecond.length)]);
      setLast(changeLast[Math.floor(Math.random() * changeLast.length)]);
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="intro-title">
        <section className="title-information">
          <span>C</span>
          <span>{first}</span>
          <span>a</span>
          <span>{second}</span>
          <span className="letter-h">H</span>
          <span>a</span>
          <span>u</span>
          <span>{last}</span>
        </section>
        <button className="bolt-intro" onClick={() => startWeb()}>
          <FontAwesomeIcon icon={faBolt} />
        </button>
      </div>
    </>
  );
};

export default Bolt;
