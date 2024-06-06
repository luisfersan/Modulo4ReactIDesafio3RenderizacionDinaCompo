import React from "react";
import { Table } from "react-bootstrap";

const Listado = ({ colaboradores, eliminarColaborador }) => {



  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <button
                className="btn btn-sm btn-danger w-100"
                onClick={() => eliminarColaborador(colaborador.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
