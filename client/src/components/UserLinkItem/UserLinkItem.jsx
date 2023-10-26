import React from "react";
import Button from "../Button/Button";
import './LinkItem.css'

const UserLinkItem = (props) => {

  const {_id, title, linkaddress, list } = props.link


  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const handleCopy = ()=>{
     // Copy the text inside the text field
      navigator.clipboard.writeText(linkaddress);
  }



  return (
      <div className="link-item">
      
        <div className="info">
          <h6 >{(title.length>30)?title.substring(0,29)+".....":title}</h6>
          <p>{(linkaddress.length>45)?linkaddress.substring(0,45)+".....":linkaddress}</p>
        </div>

        <div className="buttons-section">
          <span onClick={()=>{openInNewTab(linkaddress)}}>
            <Button text="Open" />
            </span>
          <span className="left-button">
          <button className="space" style={{visibility: "hidden"}}>.</button>
  
          <span onClick={handleCopy}>
          <i className="green fa-regular fa-clipboard fa-xl"></i>
          </span>
          </span>
          
        </div>
      </div>
  );
};

export default UserLinkItem;
