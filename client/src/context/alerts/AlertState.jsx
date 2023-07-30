import React, { useState } from "react";
import AlertContext from "./alertContext";
import { toast } from 'react-toastify';

const AlertState = (props) => {

  // Set Alert
  const updateAlert = (text, type)=> {
   if(type=="danger"){
      toast.error(text);
    }else if(type=="success"){
      toast.success(text);
    }else if(type=="warning"){
      toast.warning(text);
    }else{
      toast.info(text);
    }
  };

  return (
    <AlertContext.Provider value={{ updateAlert}}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;