import React from "react";

const Buscador = ({ buscar, handleChange }) => {
  return (
      <input
        type="text"
        className="form-control w-50"
        placeholder="Buscar colaboradores"
        value={buscar}
        onChange={handleChange}
      />
  );
};

export default Buscador;
