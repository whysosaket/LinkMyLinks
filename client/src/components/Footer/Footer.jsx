import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    // To SET footer invisible when on home page
    let location = useLocation().pathname;

  return (
    <div className={(location==="/")?"d-none":""}>
      <div className="box bg-dark footer fixed-bottom">
        <div className="container"> <p>Ⓒ SAKET ARYAN 2022</p></div>
      </div>
    </div>
  );
};

export default Footer;
