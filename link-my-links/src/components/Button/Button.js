import React from "react";
import './Button.css'

const Button = (props) => {
  return (
    <>
      <button onClick={(event)=>{
        event.preventDefault();
      }} className="glow-on-hover unselectable">
        {props.text}
      </button>
    </>
  );
};

export default Button;
