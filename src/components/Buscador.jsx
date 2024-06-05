import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Buscador = ({ buscar, handleChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaboradores"
        value={buscar}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
