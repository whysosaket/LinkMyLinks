import React from "react";
import Button from "../Button/Button";
import ButtonRound from "../ButtonRound/ButtonRound";
import "./AddLink.css";

const AddLink = () => {


  const handleClick = ()=>{
    console.log("Clicked");
  }
  return (
    <> 
    <div>
    <ButtonRound />
      <div className="p-5 bg-dark fixed-bottom addtask">
        <div className="d-flex justify-content-center">
          <div>
            <div className="form-outline form-white">
              <input type="text" id="formWhite" className="form-control" placeholder="Add a Link" />
              <span className="hide-mob" onClick={handleClick}>
                <Button text="Add Link" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddLink;
