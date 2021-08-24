import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Bolt = () => {
  const { startWeb } = useGlobalContext();
  return (
    <button className="bolt-intro" onClick={() => startWeb()}>
      <FontAwesomeIcon icon={faBolt} />
    </button>
  );
};

export default Bolt;
