import AuthContext from "./AuthContext";
import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';

const AuthState = (props) => {
  const navigate = useNavigate();

  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  const login = async (username, password) => {
    // Doing a API CALL
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
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

  const signup = async (name, username, password, otp, email) => {
    // Doing a API CALL
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        otp: otp,
        email: email,
      }),
    });
    const json = await response.json();
    if (json.success) {
      navigate("/login");
      updateAlert(json.info, "success");
    } else {
      updateAlert(json.error, "danger");
    }
  };

  const sendOtp = async (email) => {
      const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email})
      });
      const json = await response.json();
      if(json.success){
        updateAlert(json.info, "success");
      }else{
        updateAlert(json.error, "danger");
      }
  }

  return (
    <AuthContext.Provider
      value={{ login: login, signup: signup, sendOtp: sendOtp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
