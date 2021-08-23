import React from "react";

const Navbar = () => {
  return (
    <nav className="section navbar">
      <ul>
        <a href="#about">
          <li>About Me</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
