import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="box about w3-animate-opacity">
        <img src="./images/saket.jpeg" alt="saket" />
        <h1>Saket Aryan</h1>
        <p>
          Hey! This is me Saket. I'm a professional and passionate code copier.
        </p>
        <p>And I'm lazy enough to even make a new about page!</p>
      </div>

      <div className="box about w3-animate-opacity">
        <h4>Connect With Me</h4>
        <a href="https://www.linkedin.com/in/saket-aryan-131356237/">
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/whysosaket/">
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/saketaryann/">
          <i className="fa-brands fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/whysosaket">
          <i className="fa-brands fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/saket.aryan">
          <i className="fa-brands fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
