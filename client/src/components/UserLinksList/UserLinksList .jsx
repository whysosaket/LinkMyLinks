import React, { useContext, useEffect, useRef, useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import "./Links.css";
import LinkContext from "../../context/links/linkContext";
import Button from "../Button/Button";
import { useSearchParams } from "react-router-dom";
import UserLinkItem from "../UserLinkItem/UserLinkItem";


const UserLinksList = () => {
  // Code to get code

  const contextLink = useContext(LinkContext);
  const { links, getLinks, deleteLink, editLink, clearLinks, getUserLinks } = contextLink;

  const [searchParams] = useSearchParams();


  useEffect(() => {
    let username = searchParams.get("username");
    clearLinks();
    if(username!==null||username!==undefined){
      getUserLinks(username);
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      
      <h2 className="in-links">Default List</h2>
      <div className="links">
        
        {links.map((link, index) => {
          return (
            <UserLinkItem
              link={link}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserLinksList;
