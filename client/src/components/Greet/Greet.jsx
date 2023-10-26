import React from "react";
import "./Greet.css";
import { useNavigate } from "react-router-dom";

const Greet = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  }

  const handleSignupClick = () => {
    navigate("/signup");
  }

  return (
    <>
      <div class="typewriter">
        <h1>Link My Links</h1>
      </div>
      <div className="container">
        <div>
          <button onClick={handleLoginClick} className="button log">Login</button>
          <button onClick={handleSignupClick} className="button reg">Sign up</button> 
          <p>
            Made with <span>❤</span> by{" "}
            <a href="https://www.instagram.com/saketaryann/">@saketaryann</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Greet;
