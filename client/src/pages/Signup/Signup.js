import React, { useContext, useRef } from "react";
import Button from "../../components/Button/Button";
import "./Signup.css";
import "../../Glow.css";
import {useNavigate} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext'

const Signup = () => {
  const navigate = useNavigate();

  // Importing alert context
  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  // Creating refs to handle values
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);


  const handleClick = async () => {
    // Doing a API CALL
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/createuser`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: nameref.current.value, username: usernameref.current.value, password: passwordref.current.value})
    });
    const json = await response.json();
    if(json.success){
      navigate('/login');
      updateAlert(json.info, "success");
    }else{
      updateAlert(json.error, "danger");
    }
  };


  return (
    <>
      <div className="center-item v-align">
        <div className="signup glow-animate">
          <form>
            <h3>Signup Here</h3>

            <label htmlFor="username">Name</label>
            <input type="text" placeholder="Name" id="name" ref={nameref}/>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" ref={usernameref}/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" ref={passwordref}/>

            <div className="center-item" onClick={handleClick}>
              {" "}
              <Button text="Signup" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
