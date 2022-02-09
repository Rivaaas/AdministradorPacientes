const Paciente = ({ pacientes, setPaciente,eliminarPaciente }) => {
  const { id } = pacientes;


  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente?");

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div>
      <div>
        <div className="m-3 color shadow-md px-5 py-10 inputLista">
          <p>
            Nombre:{""}
            <span>{pacientes.nombre}</span>
          </p>
          <p>
            Propietario:{""}
            <span>{pacientes.propietario}</span>
          </p>
          <p>
            Email:{""}
            <span>{pacientes.email}</span>
          </p>
          <p>
            Alta:{""}
            <span>{pacientes.alta}</span>
          </p>
          <p>
            Sintomas:{""}
            <span>{pacientes.sintomas}</span>
          </p>
          <button
            type="button"
            onClick={() => setPaciente(pacientes)}
            className="btn btn-warning"
          >
            Editar
          </button>
          <button type="button" className="btn btn-danger" onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
