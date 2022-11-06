import React from "react";
import Button from "../Button/Button";
import './LinkItem.css'

const LinkItem = () => {
  return (
      <div class="link-item">
        <div class="info">
          <h6>CSS Buttons</h6>
          <p>https://dev.to/webdeasy/top-20-css-buttons-animations-f41</p>
        </div>

        <div class="buttons-section">
            <Button text="Open" />
          <button className="space" style={{visibility: "hidden"}}>.</button>
          <i class="fa-solid fa-xmark fa-2xl space cross"></i>
          <i class="fa-solid fa-pen fa-xl space edit"></i>
        </div>
      </div>
  );
};

export default LinkItem;
