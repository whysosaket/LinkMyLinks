import React, { useContext, useRef } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import "../../Glow.css";
import {useNavigate} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext'

const Login = () => {
  const host = "https://link-my-links.vercel.app";

  const navigate = useNavigate();

  // Importing alert context
  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  // Creating refs to handle values
  const usernameref = useRef(null);
  const passwordref = useRef(null);


  const handleClick = async () => {
    // Doing a API CALL
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: usernameref.current.value, password: passwordref.current.value})
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem('lmltoken', json.authtoken);
      localStorage.setItem('username', json.username);
      navigate('/');
      updateAlert("Logged in as "+json.username, "success");
    }else{
      updateAlert(json.error, "danger");
    }
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
