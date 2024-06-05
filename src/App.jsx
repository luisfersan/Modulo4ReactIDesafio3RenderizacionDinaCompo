import React, { useState } from "react";
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
    <div className="container">
      <h1>Listado de Colaboradores</h1>
      <Alert mensaje={mensaje} />
      <Buscador
        buscar={buscar}
        handleChange={handleBuscarChange}
      />
      <Listado
        colaboradores={colaboradoresFiltrados}
        eliminarColaborador={eliminarColaborador}
      />
      <Formulario
        agregarColaborador={agregarColaborador}
        setMensaje={setMensaje}
      />
    </div>
  );
};

export default App;
