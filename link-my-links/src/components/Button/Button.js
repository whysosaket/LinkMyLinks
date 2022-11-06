import React from "react";
import './Button.css'

const Button = (props) => {
  return (
    <>
      <button className="glow-on-hover">
        {props.text}
      </button>
    </>
  );
};

export default Button;
