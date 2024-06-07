import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";

const App = () => {

  // Iniciación de lista de colaboradores
  const initialState = () => {
    if(localStorage.getItem('colaboradores') !== null){ //Evalua si existe el archivo 'colaboradores' en localStorage
      const localStorageColaboradores = localStorage.getItem('colaboradores'); //Se trae la info del elemento
      return localStorageColaboradores ? JSON.parse(localStorageColaboradores) : []; // Si contiene info se parsea para legibiliad, si no, se entrega un arreglo vacío
    }
    return BaseColaboradores //En caso de no existir el archivo colaboradores en local storage devuelve colaboradores del archivo BaseColaboradores
  }

  // Estado para la lista de colaboradores
  const [colaboradores, setColaboradores] = useState(initialState);

    // Local Storage de colaboradores con useEffect
    useEffect(() => {
      localStorage.setItem('colaboradores',JSON.stringify(colaboradores));
    },[colaboradores])

  // Estado para la búsqueda
  const [buscar, setBuscar] = useState("");

  // Estado para los mensajes de alerta
  const [mensaje, setMensaje] = useState({ text: "", type: "" });

  // Función para agregar un colaborador
  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
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
    setTimeout(() => {
      setMensaje({ text: "", type: "" });
    }, 3000);
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
            colaboradores={colaboradores}
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
