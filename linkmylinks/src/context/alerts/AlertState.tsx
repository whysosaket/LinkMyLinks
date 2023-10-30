import { useState } from "react";
import AlertContext from "./alertContext";
import { toast } from 'react-toastify';

const AlertState = (props: any) => {

  const [linkValue, setLinkValue] = useState("");

  // Set Alert
  const updateAlert = (text:string, type:string)=> {
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
    <AlertContext.Provider value={{ updateAlert, linkValue, setLinkValue }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;