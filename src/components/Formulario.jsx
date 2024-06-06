import React, { useState } from "react";

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
    <>
      <h4 className="mb-2">Agregar Colaborador</h4>
        <form
          className="d-flex flex-column gap-2 my-3"
          onSubmit={handleSubmit}
        >
        <input
          type="text"
          className="form-control"
          name="nombre"
          placeholder="Nombre del colaborador"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="email"
          className="form-control"
          name="correo"
          placeholder="Correo del colaborador"
          value={form.correo}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control"
          name="edad"
          placeholder="Edad del colaborador"
          value={form.edad}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control"
          name="cargo"
          placeholder="Cargo del colaborador"
          value={form.cargo}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control"
          name="telefono"
          placeholder="Teléfono del colaborador"
          value={form.telefono}
          onChange={handleChange}
        />

      <button
        type="submit"
        className="btn btn-primary w-100"
      >
        Agregar Colaborador
      </button>
    </form>
    </>
  );
};

export default Formulario;
