import React from "react";
import { useGlobalContext } from "./context";

const Footer = () => {
  const { footer } = useGlobalContext();
  const actualYear = new Date().getFullYear();
  return (
    <section className={`footer ${footer}`}>
      Powered by ClauHaus © {actualYear}
    </section>
  );
};

export default Footer;
