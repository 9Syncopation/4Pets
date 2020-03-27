import React from "react";
import { faWindowClose, FaWindowClose } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";

export default function Alert() {
  const { alert, hideAlert } = React.useContext(UserContext);
  console.log('ALERT',alert);
  
  let css = "alert-container ";
  if(alert.show){
      css += "alert-show"
      if(alert.type === "danger"){
        css += " alert-danger "
      }
  }


  return (
    <div className={css}>
      <div className="alert">
        <p>{alert.show && alert.msg}</p>
        <button className="alert-close" onClick={hideAlert}>
          <FaWindowClose />
        </button>
      </div>
    </div>
  );
}
