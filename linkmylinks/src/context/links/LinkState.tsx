import { useContext, useState } from "react";
import AlertContext from "../alerts/alertContext";
import LinkContext from "./linkContext";

const LinkState = (props: any) => {
  const host = import.meta.env.VITE_HOST;

  const [links, setLinks] = useState([]);

  // This is for import Context alert
  const contextAlert = useContext(AlertContext);
  const {updateAlert} = contextAlert;

  // Get all links
  const getLinks = async () => {
    if(localStorage.getItem('lmltoken') === null) {
      updateAlert("Please Login or Signup to Save or View Links", "warning");
      return;
    }
    // Doing a API CALL
    try{
    props.setProgress(30);
    const response = await fetch(`${host}/api/link/fetchalllinks`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken') as string
      }
    });
    props.setProgress(60);
    const json = await response.json();
    if(json.success) setLinks(json.links);
    console.log(json.links);
    props.setProgress(100);
    }catch(error){
      console.log(error);
      props.setProgress(100);
    }
  };


  // Add a new Link
  const addLink = async (title: string, linkaddress: string, list: string, isPublic: boolean) => {
    if(localStorage.getItem('lmltoken') === null) {
      updateAlert("Please Login First!", "danger");
      return;
    }
    // Doing a API CALL
    const response = await fetch(`${host}/api/link/addlink`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken') as string
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
  const deleteLink = async (id:string) => {
    // TODO - Delete note in backend aswell
    const response = await fetch(`${host}/api/link/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken') as string
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
  const editLink = async (_id: string, title: string, linkaddress: string, list: string, isPublic: boolean) => {
    // API call
    const response = await fetch(`${host}/api/link/updatelink/${_id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('lmltoken') as string
      },
      body: JSON.stringify({title, linkaddress, list, isPublic}) 
    });

    const json = await response.json();
    if(json.success){
      updateAlert(json.info, "primary");
    }else{
      updateAlert(json.error, "danger");
    }

    getLinks();
  };


  // fetch userlinks
  const getUserLinks = async (username: string) => {
    // Doing a API CALL
    props.setProgress(30);
    const response = await fetch(`${host}/api/link/fetchalllinks/${username}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
    });
    props.setProgress(60);
    const json = await response.json();
    if(json.success) setLinks(json.links);
    props.setProgress(100);
  };


  // Clear Links
  const clearLinks = () => {
    setLinks([]);
  };

  return (
    <LinkContext.Provider value={{ links, addLink, deleteLink, editLink, getLinks, clearLinks, getUserLinks }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;