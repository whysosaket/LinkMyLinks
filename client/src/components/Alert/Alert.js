import React, {useContext} from "react";
import AlertContext from "../../context/alerts/alertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  const { alert, visible, type } = context;

  return (
    <div>
      <div className={visible +" alert alert-"+type+" fixed-top"} role="alert">
        {alert}
      </div>
    </div>
  );
};

export default Alert;