import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCog } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <section>
      <div className="title-container">
        <div className="dashboard-title">ClauHaus</div>
        <button className="bolt-dashboard">
          <FontAwesomeIcon icon={faBolt} />
        </button>
        <button className="options">
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
