import React, { useContext, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import "./Signup.css";
import "../../Glow.css";
import AuthContext from '../../context/auth/AuthContext';

const Signup = () => {
  // Importing alert context
  const contextAuth = useContext(AuthContext);
  const {signup,sendOtp} = contextAuth;

  const [otpHidden, setOtpHidden] = useState(true);

  // Creating refs to handle values
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);
  const emailref = useRef(null);
  const otpref = useRef(null);

  const handleClick = async () => {
    signup(nameref.current.value, usernameref.current.value, passwordref.current.value, otpref.current.value,emailref.current.value )
  };

  const handleOtp = async () => {
    setOtpHidden(false);
    sendOtp(emailref.current.value);
  }


  return (
    <>
      <div className="center-item v-align">
        <div className="signup glow-animate">
          <form>
            <h3>Signup Here</h3>

            <label htmlFor="username">Name</label>
            <input type="text" placeholder="Name" id="name" ref={nameref}/>

            <div className="">
            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email" id="email" ref={emailref}/>
            <div className="" onClick={handleOtp}>
              {" "}
              <p className="btn btn-outline-dark btn-sm ml-2 my-2" style={{fontSize: '12px'}}> Send OTP </p>
            </div>
            </div>

            <label htmlFor="username" className="mt-2">Username</label>
            <input type="text" placeholder="Username" id="username" ref={usernameref}/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" ref={passwordref}/>

            <div className={`${otpHidden&&'d-none'}`}>
            <label htmlFor="otp">OTP</label>
            <input type="text" placeholder="OTP" id="otp" ref={otpref}/>
            </div>

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
