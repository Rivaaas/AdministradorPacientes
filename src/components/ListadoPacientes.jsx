import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div>
      {pacientes && pacientes.length ? (
        <>
          <div className="fondo">
            <div className="text-center">
              <h1 className="text-center fuente">Listado Pacientes</h1>
              <h5 className="text-center fuente">Pacientes y citas</h5>
            </div>

            {pacientes.map((paciente) => (
              <Paciente
                pacientes={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="">
            <h1 className="text-center fuente ">Listado Pacientes</h1>
            <p>
              <h1 className="text-center text-indigo font-bold letramorada almedio d-flex">
                No hay pacientes
              </h1>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
