import React, { useContext, useRef } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import "../../Glow.css";
import AuthContext from "../../context/auth/AuthContext";

const Login = () => {
  // Importing alert context
  const contextAuth = useContext(AuthContext);
  const {login} = contextAuth;

  // Creating refs to handle values
  const usernameref = useRef(null);
  const passwordref = useRef(null);


  const handleClick = async () => {
    login(usernameref.current.value, passwordref.current.value)
  };


  return (
    <>
      <div className="center-item v-align">
        <div className="login glow-animate">
          <form>
            <h3>Login Here</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" ref={usernameref}/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" ref={passwordref}/>

            <div className="center-item" onClick={handleClick}>
              {" "}
              <Button text="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
