import React, {useState} from "react";
import { useEffect } from "react";

const Formulario = ({setPacientes,pacientes,paciente}) => {


  const [nombre,setNombre] = useState("");
  const [propietario,setPropietario] = useState("");
  const [email,setEmail] = useState("");
  const [alta,setAlta] = useState("");
  const [sintomas,setSintomas] = useState("");

  useEffect(()=> {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }else{
      console.log("no hay algo")
    }
  },[paciente]);


  const generarID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if([nombre,propietario,email,alta,sintomas].includes('')){
      console.log("Campo vacio")
    }else{
     


      //Objeto del paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta ,
        sintomas,
        id: generarID()
      }
      setPacientes([...pacientes,objetoPaciente]);   
    }
  }

  return (
    <div>
      <h1>Formulario</h1>
      <span>Añade pacientes y administralos</span>
      <form className="p-5 mt-2" onSubmit={handleSubmit}>
        <label>Nombre Mascota</label> <br/>
        
        <input type="text" id="nombre" className="form-control" placeholder="Nombre de mascota" value= {nombre}  
        onChange={ (e) => setNombre(e.target.value) }
        />
        <br/>
        <label>Nombre propietario</label> <br/>
        <input type="text" id="Propietario" className="form-control" placeholder="Nombre de propietario" value={propietario}
        onChange={ (e) => setPropietario(e.target.value) }
        />
        <br/>
        <label>Email</label> <br/>
        <input type="text" id="email" className="form-control" placeholder="Email" value={email}
        onChange={ (e) => setEmail(e.target.value)  }
        />
        <br/>
        <label>Alta</label> <br/>
        <input type="date" id="alta" className="form-control" placeholder="Fecha de alta" value={alta}
        onChange={ (e) => setAlta(e.target.value) }
        />
        <br/>
        <label>Sintomas</label> <br/>
        <textarea
        className="form-control"
        id="sintomas"
        value={sintomas}
        placeholder="Describe los sintomas"
        onChange={ (e) => setSintomas(e.target.value) }
        />
        <br/>
        <input type="submit" className="btn btn-primary" value="Registrar" />


      </form>
    </div>
    
    );
};

export default Formulario;
