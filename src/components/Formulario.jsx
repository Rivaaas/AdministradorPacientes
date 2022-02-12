import React, { useState } from "react";
import { useEffect } from "react";

const Formulario = ({ setPacientes, pacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    } else {
      console.log("no hay algo");
    }
  }, [paciente]);

  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      const respuesta = confirm("Campo Vacio");

    } else {
      //Objeto del paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
      } else {
        objetoPaciente.id = generarID();
        setPacientes([...pacientes, objetoPaciente]);

        //Reiniciar FORM
      }
    }
  };

  return (
    <div className="cuadro2">
      <div>
        <h2 className="text-center form1">Seguimiento paciente </h2>
        <h2 className="text-center letramorada"> Veterinaria</h2>
      </div>
      <h5 className="text-center form1">Añade pacientes y administralos</h5>
      <form className="p-4 " onSubmit={handleSubmit}>
        <label>Nombre Mascota</label> <br />
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Nombre de mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label>Nombre propietario</label> <br />
        <input
          type="text"
          id="Propietario"
          className="form-control"
          placeholder="Nombre de propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />
        <br />
        <label>Email</label> <br />
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Alta</label> <br />
        <input
          type="date"
          id="alta"
          className="form-control"
          placeholder="Fecha de alta"
          value={alta}
          onChange={(e) => setAlta(e.target.value)}
        />
        <br />
        <label>Sintomas</label> <br />
        <textarea
          className="form-control"
          id="sintomas"
          value={sintomas}
          placeholder="Describe los sintomas"
          onChange={(e) => setSintomas(e.target.value)}
        />
        <br />
        <input
          type="submit"
          className="btn btn-dark boton1"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
