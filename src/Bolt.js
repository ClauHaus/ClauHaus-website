import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Bolt = () => {
  const [title, setTitle] = useState("Claudio");
  const { startWeb } = useGlobalContext();
  return (
    <>
      <div
        className="intro-title"
        onMouseEnter={() => setTitle("ClauHaus")}
        onMouseLeave={() => setTitle("Claudio")}
      >
        {title}
        <button className="bolt-intro" onClick={() => startWeb()}>
          <FontAwesomeIcon icon={faBolt} />
        </button>
      </div>
    </>
  );
};

export default Bolt;
