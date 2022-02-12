const Paciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  const { id } = pacientes;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="  m-3 color shadow-md px-5 py-10 inputLista cuadro max">
          <p>
            Nombre: <span>{pacientes.nombre}</span>
          </p>
          <p>
            Propietario: <span>{pacientes.propietario}</span>
          </p>
          <p>
            Email: <span>{pacientes.email}</span>
          </p>
          <p>
            Alta: <span>{pacientes.alta}</span>
          </p>
          <p>
            Sintomas: <span>{pacientes.sintomas}</span>
          </p>
          <div className="container">
            <div className="row ">
              <div className="col-sm-4 d-flex  w-60 space">
                <button
                  type="button"
                  onClick={() => setPaciente(pacientes)}
                  className="btn btn-dark btnEditar"
                >
                  Editar
                </button>
              </div>
              <div className="col-sm-4 w-50 d-flex  space2">
                <button
                  type="button"
                  className="btn btn-light botonmorado"
                  onClick={handleEliminar}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
