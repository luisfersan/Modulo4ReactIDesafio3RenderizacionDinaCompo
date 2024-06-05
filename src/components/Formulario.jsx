import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = ({ agregarColaborador, setMensaje }) => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field === "")) {
      setMensaje({
        text: "Todos los campos son obligatorios.",
        type: "danger",
      });
    } else {
      agregarColaborador(form);
      setForm({ nombre: "", correo: "", edad: "", cargo: "", telefono: "" });
      setMensaje({
        text: "Colaborador agregado exitosamente.",
        type: "success",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Correo</label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Edad</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={form.edad}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Cargo</label>
        <input
          type="text"
          className="form-control"
          name="cargo"
          value={form.cargo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Teléfono</label>
        <input
          type="text"
          className="form-control"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Agregar Colaborador
      </button>
    </form>
  );
};

export default Formulario;
