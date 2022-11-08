import React, { useState } from "react";
import LinkContext from "./linkContext";

const LinkState = (props) => {
  const host = "http://192.168.29.73:9000";

  const [links, setLinks] = useState([]);

  // Get all links
  const getLinks = async () => {
    // Doing a API CALL
    const response = await fetch(`${host}/api/link/fetchalllinks`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    if(json.success) setLinks(json.links);
  };


  // Add a new Link
  const addLink = async (title, linkaddress, list, isPublic) => {
    // Doing a API CALL
    await fetch(`${host}/api/links/addnote`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, linkaddress, list, public: isPublic})
    });
    
    getLinks();
  };

  // Delete a Link
  const deleteLink = async (id) => {
    // TODO - Delete note in backend aswell
    await fetch(`${host}/api/api/link/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    getLinks();
  };

  // Edit a note
  const editLink = async (_id, title, linkaddress, list, isPublic) => {
    // API call
    await fetch(`${host}/api/link/updatelink/${_id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, linkaddress, list, public: isPublic}) 
    });



    //logic to edit in client
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      
      if(element._id===_id){
        element.title = title;
        element.linkaddress = linkaddress;
        element.list = list;
        element.isPublic = isPublic;
      }
    }
    getLinks();
  };

  return (
    <LinkContext.Provider value={{ links, addLink, deleteLink, editLink, getLinks }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;