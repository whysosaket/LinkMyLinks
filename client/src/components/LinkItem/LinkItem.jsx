import React from "react";
import Button from "../Button/Button";
import './LinkItem.css'

const LinkItem = (props) => {

  const {_id, title, linkaddress, list } = props.link

  const handleDelete = ()=>{
    props.deleteLink(_id);
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const handleCopy = ()=>{
     // Copy the text inside the text field
      navigator.clipboard.writeText(linkaddress);
  }

  const handleEdit = ()=>{
    props.handleForeignClick(_id, title, linkaddress, list, props.link.public)
  }


  return (
      <div className="link-item">
      
        <div className="info">
          <h6 >{(title.length>30)?title.substring(0,29)+".....":title}</h6>
          <p>{(linkaddress.length>45)?linkaddress.substring(0,45)+".....":linkaddress}</p>
          <p>{props.link.public?"Public":"Private"}</p>
        </div>

        <div className="buttons-section">
          <span onClick={()=>{openInNewTab(linkaddress)}}>
            <Button text="Open" />
            </span>
          <span className="left-button">
          <button className="space" style={{visibility: "hidden"}}>.</button>
          <span className="cross" onClick={handleDelete}>
          <i className="fa-solid fa-xmark fa-2xl space cross"></i>
          </span>
          <span onClick={handleEdit}>
          <i className="fa-solid fa-pen fa-xl space edit"></i>
          </span>
          <span onClick={handleCopy}>
          <i className="green fa-regular fa-clipboard fa-xl"></i>
          </span>
          </span>
          
        </div>
      </div>
  );
};

export default LinkItem;
