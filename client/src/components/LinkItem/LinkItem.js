import React from "react";
import Button from "../Button/Button";
import './LinkItem.css'

const LinkItem = (props) => {

  const {_id, title, linkaddress, list } = props.link

  return (
      <div className="link-item">
        <div className="info">
          <h6>{title}</h6>
          <p>{linkaddress}</p>
        </div>

        <div className="buttons-section">
            <Button text="Open" />
          <button className="space" style={{visibility: "hidden"}}>.</button>
          <i className="fa-solid fa-xmark fa-2xl space cross"></i>
          <i className="fa-solid fa-pen fa-xl space edit"></i>
        </div>
      </div>
  );
};

export default LinkItem;
