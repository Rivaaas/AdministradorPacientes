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
        <div className="row color shadow-md inputLista cuadro rowcss">
          <div className="col">
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
          </div>
          <div className="row">
            <div className="col-sm-6 col-4  d-flex space query">
              <button
                type="button"
                onClick={() => setPaciente(pacientes)}
                className="btn btn-dark btns d-flex justify-content-center"
              >
                Editar
              </button>
            </div>
            <div className="col-sm-6 col-4  d-flex">
              <button
                type="button"
                className=" btn btn-light btns botonmorado d-flex justify-content-center"
                onClick={handleEliminar}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
