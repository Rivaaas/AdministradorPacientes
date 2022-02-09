import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import {useState} from "react";

function App() {


  const [pacientes,setPacientes] = useState([]);

  const [paciente, setPaciente] = useState({});


  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
    setPacientes(pacientesActualizados);
  }
  return (
    <>
      <div className="container">
        <div className="row ">
        
          <div className="col-sm-7">
            <Formulario
            setPacientes = {setPacientes}
            pacientes = {pacientes}
            paciente = {paciente}
            />
          </div>
          <div className="col-sm-5">
            <ListadoPacientes 
            pacientes={pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
