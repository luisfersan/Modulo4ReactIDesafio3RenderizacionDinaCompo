import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Alert = ({ mensaje }) => {
  if (!mensaje.text) return null;

  return (
    <div
      className={`alert alert-${mensaje.type}`}
      role="alert"
    >
      {mensaje.text}
    </div>
  );
};

export default Alert;
