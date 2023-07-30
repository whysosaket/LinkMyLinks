import React, { useContext, useState } from "react";
import AlertContext from "../alerts/alertContext";
import LinkContext from "./linkContext";

const LinkState = (props) => {
  const host = import.meta.env.VITE_HOST;

  const [links, setLinks] = useState([]);

  // This is for import Context alert
  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  // Get all links
  const getLinks = async () => {
    // Doing a API CALL
    props.setProgress(30);
    const response = await fetch(`${host}/api/link/fetchalllinks`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken')
      }
    });
    props.setProgress(60);
    const json = await response.json();
    if(json.success) setLinks(json.links);
    props.setProgress(100);
  };


  // Add a new Link
  const addLink = async (title, linkaddress, list, isPublic) => {
    // Doing a API CALL
    const response = await fetch(`${host}/api/link/addlink`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken')
      },
      body: JSON.stringify({title, linkaddress, list, public: isPublic})
    });

    const json = await response.json();
    if(json.success){
      updateAlert(json.info, "success");
    }else{
      updateAlert(json.error, "danger");
    }
    getLinks();
  };

  // Delete a Link
  const deleteLink = async (id) => {
    // TODO - Delete note in backend aswell
    const response = await fetch(`${host}/api/link/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken')
      }
    });
    const json = await response.json();
    if(json.success){
      updateAlert(json.info, "warning");
    }else{
      updateAlert(json.error, "danger");
    }
    getLinks();
  };

  // Edit a note
  const editLink = async (_id, title, linkaddress, list, isPublic) => {
    // API call
    const response = await fetch(`${host}/api/link/updatelink/${_id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken')
      },
      body: JSON.stringify({title, linkaddress, list, public: isPublic}) 
    });

    const json = await response.json();
    if(json.success){
      updateAlert(json.info, "primary");
    }else{
      updateAlert(json.error, "danger");
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