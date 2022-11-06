import React from "react";
import Button from "../Button/Button";
import './AddLink.css'

const AddLink = () => {
  return (
    <div>
      <div className="border p-5 bg-dark fixed-bottom addtask">
        <div className="d-flex justify-content-center">
          <div>
            <div className="form-outline form-white">
              <input type="text" id="formWhite" className="form-control" />
              <label className="form-label" for="formWhite">
                Enter Task
              </label>
              <Button text="Add Link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLink;
