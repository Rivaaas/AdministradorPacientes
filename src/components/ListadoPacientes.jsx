import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {

  return (
    <div>
      {pacientes && pacientes.length ? (
        <>
          <h1 className="text-center">Listado Pacientes</h1>
          <p>
             {""}
            <span className="text-indigo font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente pacientes={paciente}
             key={paciente.id} 
             setPaciente={setPaciente}
             eliminarPaciente = {eliminarPaciente}
             />
          ))}
          
        </>
      ) : (
        <>
          <h1 className="text-center">Listado Pacientes</h1>
          <p>
            <span className="text-indigo font-bold">No hay pacientes</span>
          </p>
          
        </>
      )}

      
    </div>
  );
};

export default ListadoPacientes;
