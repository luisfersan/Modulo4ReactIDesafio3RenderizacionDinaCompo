import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";

const App = () => {
  // Estado para la lista de colaboradores
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  // Estado para la búsqueda
  const [buscar, setBuscar] = useState("");

  // Estado para los mensajes de alerta
  const [mensaje, setMensaje] = useState({ text: "", type: "" });

  // Función para agregar un colaborador
  const agregarColaborador = (colaborador) => {
    const nuevoColaborador = {
      ...colaborador,
      id: (colaboradores.length + 1).toString(),
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
    // Agregar mensaje de éxito
    setMensaje({ text: "Colaborador agregado exitosamente.", type: "success" });
  };

  // Función para eliminar un colaborador
  const eliminarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
    // Agregar mensaje de eliminación
    setMensaje({ text: "Registro eliminado correctamente.", type: "success" });
  };

  // Manejar el cambio en la barra de búsqueda
  const handleBuscarChange = (e) => {
    setBuscar(e.target.value);
  };

  // Filtrar colaboradores basado en la búsqueda
  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    Object.values(colaborador).some((val) =>
      val.toLowerCase().includes(buscar.toLowerCase())
    )
  );

  return (
    <Container fluid>
      <h1 className="fw-bold my-3 text-center">Lista de Colaboradores</h1>
      <Row>
        <Col xs={12} lg={9} className="d-flex flex-column gap-2 mb-3">
          <Buscador
            buscar={buscar}
            handleChange={handleBuscarChange}
          />
          <Listado
            colaboradores={colaboradoresFiltrados}
            eliminarColaborador={eliminarColaborador}
          />
        </Col>
        <Col xs={12} lg={3} className="mb-3">
          <Formulario
            agregarColaborador={agregarColaborador}
            setMensaje={setMensaje}
          />
          <Alert mensaje={mensaje} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
