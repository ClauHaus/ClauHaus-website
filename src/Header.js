import React from "react";
import claudio from "./images/claudio.jpg";

const Header = () => {
  return (
    <section className="section">
      <img src={claudio} alt="Claudio Aime" className="photo" />
      <h1 className="main-title">ClauHaus</h1>
    </section>
  );
};

export default Header;
