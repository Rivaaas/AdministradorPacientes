import React, { useState } from "react";
import { useEffect } from "react";

const Formulario = ({ setPacientes, pacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error,setError] = useState(false);
  const [errorCorreo,setErrorCorreo] = useState(false)
  
 
  const validar_mail = () =>{
   
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  
  }


  const verificacion= (email) =>{
    if(validar_mail(email)){
      console.log("correcto")
    }else{
      console.log("incorrecto")
      setError(true)
      return

    }
  }


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
      setError(true);

    } else {
      
        //Objeto del paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      };
      if(validar_mail(email)){
        console.log("correcto")
        setNombre("");
        setPropietario("");
        setEmail("");
        setAlta("");
        setSintomas("");
      }else{
        console.log("incorrecto")
        setError(true)
        return
  
      }
      setError(false);



      if (paciente.id) {
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
        
      } else {
        objetoPaciente.id = generarID();
        setPacientes([...pacientes, objetoPaciente]);

      }
    }
  };

 

  return (
    <div className="cuadro2">
      <div>
        <h2 className="text-center form1">Seguimiento paciente </h2>
        <h2 className="text-center letramorada"> Veterinaria</h2>
      </div>
      <h5 className="text-center form1">A??ade pacientes y administralos</h5>
      <form className="p-4 form2 " onSubmit={handleSubmit}>
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
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          className="btn btn-dark boton1 mb-4"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
        />
        <h1 className="error mb-5">{error ? 'Error en datos' : ''}</h1>
      </form>
    </div>
  );
};

export default Formulario;
