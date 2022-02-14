import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="container">
      <div className="row align-items-center ">
        {pacientes && pacientes.length ? (
          <>
            <div className="fondo">
              <div className="text-center mt-7">
                <h1 className=" fuente d-flex justify-content-center ">
                  Listado Pacientes
                </h1>
                <h5 className=" fuente d-flex justify-content-center">
                  Pacientes y citas
                </h5>
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
            <div className="container">
              <div className="row ">
                <h1 className="col-sm-12 d-flex justify-content-center fuente mt-10">
                  Listado Pacientes
                </h1>
              </div>
              <div className="row">
                <h1 className="d-flex justify-content-center fuente letramorada margen ">
                  No hay pacientes
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoPacientes;
