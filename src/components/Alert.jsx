import React from "react";

const Alert = ({ mensaje }) => {
  if (!mensaje.text) return null;

  return (
    <div
      className={`alert alert-${mensaje.type} text-center`}
      role="alert"
    >
      {mensaje.text}
    </div>
  );
};

export default Alert;
