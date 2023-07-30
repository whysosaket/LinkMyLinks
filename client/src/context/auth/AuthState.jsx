import AuthContext from "./AuthContext";
import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import AlertContext from '../alerts/alertContext';

const AuthState = (props) => {
  const navigate = useNavigate();

  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  const login = async (username, password) => {
    props.setProgress(30);
    // Doing a API CALL
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/auth/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    });
    props.setProgress(60);
    const json = await response.json();
    if(json.success){
      localStorage.setItem('lmltoken', json.authtoken);
      localStorage.setItem('username', json.username);
      navigate('/');
      updateAlert("Logged in as "+json.username, "success");
    }else{
      updateAlert(json.error, "danger");
    }
    props.setProgress(100);
  };

  const signup = async (name, username, password, otp, email) => {
    // Doing a API CALL
    props.setProgress(30);
    const response = await fetch(`${import.meta.env.VITE_HOST}/api/auth/createuser`, {
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
    props.setProgress(60);
    const json = await response.json();
    if (json.success) {
      navigate("/login");
      updateAlert(json.info, "success");
    } else {
      updateAlert(json.error, "danger");
    }
    props.setProgress(100);
  };

  const sendOtp = async (email) => {
    props.setProgress(30);
      const response = await fetch(`${import.meta.env.VITE_HOST}/api/auth/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email})
      });
      props.setProgress(60);
      const json = await response.json();
      if(json.success){
        updateAlert(json.info, "success");
      }else{
        updateAlert(json.error, "danger");
      }
      props.setProgress(100);
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
