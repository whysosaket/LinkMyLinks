import React from "react";
import Button from "../Button/Button";
import './Login.css'
import '../../Glow.css'

const Login = () => {

  return (
    <>
    <div className="center-item v-align">
    <div className="login glow-animate">
      <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <div className="center-item"> <Button text="Login" /></div>
       
    </form>
    </div>
    </div>
    </>
  )
}

export default Login;
