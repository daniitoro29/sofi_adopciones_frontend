import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import Swal from "sweetalert2";
import "./FormCreateUser.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NavBar from "../NavBar/NavBar";

const Form = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [form, setForm] = useState({
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  contraseña: "",
  genero: "",
  estado: "Activo",
  rol: "1",
 });



 const changeHandler = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setForm({
   ...form,
   [property]: value,
  });
 };

 const handleSend = async () => {
      if (!form.nombre || !form.apellido || !form.telefono || !form.correo || !form.contraseña || !form.genero || !form.estado) {
        Swal.fire("Error", "Por favor, completar todos los campos", "error");
        return;
      }
  
      if (form.nombre.length < 3 || form.apellido.length < 3) {
        Swal.fire("Error", "El nombre y apellido deben ser mayor de 3 caracteres", "error");
        return;
      }
  
      if (form.telefono.length < 7) {
        Swal.fire("Error", "El numero de telefono debe ser mayor de 7 caracteres", "error");
        return;
      }
  
      if (form.contraseña.length < 7) {
        Swal.fire("Error", "La contraseña debe tener mas de 7 caracteres entre numeros y letras", "error");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.correo)) {
        Swal.fire("Error", "El correo electrónico no es válido", "error");
        return;
      }
      try {
        await dispatch(
          createUser({
            Usu_Nombre: form.nombre,
            Usu_Apellido: form.apellido,
            Usu_Telefono: form.telefono,
            Usu_Correo: form.correo,
            Usu_Contraseña: form.contraseña,
            Usu_Genero: form.genero,
            Usu_Estado: form.estado,
            Rol_Id: form.rol,
          })
        );
  
        setForm({
          nombre: "",
          apellido: "",
          telefono: "",
          correo: "",
          contraseña: "",
          genero: "",
          estado: "",
          rol: "",
        });
  
        Swal.fire("¡Registro exitoso!", "El usuario se ha creado correctamente", "success");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          Swal.fire("Error", error.response.data.message, "error");
        } else {
          Swal.fire("Error", "Ocurrió un error al crear el usuario", "error");
        }
      }
    };


 return (
  <div>
  <NavBar />

   <div style={{ display: "flex", justifyContent: "center" }}>
   <div className="general-container_form">
    <h1>Completa los datos para crear tu cuenta</h1>
    <Grid container className="container_form">
     <Grid item xs={6} md={6}>
      <label>Nombre</label>
      <TextField
       id="form_input"
       variant="standard"
       type="text"
       name="nombre"
       value={form.nombre}
       onChange={changeHandler}
      />
     </Grid>
     <Grid item xs={6} md={6}>
      <label>Apellido</label>
      <TextField
       variant="standard"
       type="text"
       name="apellido"
       value={form.apellido}
       onChange={changeHandler}
      />
     </Grid>
     <Grid item xs={6} md={6}>
      <label>Teléfono</label>
      <TextField
       variant="standard"
       type="text"
       name="telefono"
       value={form.telefono}
       onChange={changeHandler}
      />
     </Grid>
     <Grid item xs={6} md={6}>
      <label>Correo</label>
      <TextField
       variant="standard"
       type="email"
       name="correo"
       value={form.correo}
       onChange={changeHandler}
      />
     </Grid>
     <Grid item xs={6} md={6}>
      <label>Contraseña</label>
      <TextField
       type="password"
       variant="standard"
       name="contraseña"
       value={form.contraseña}
       onChange={changeHandler}
      />
     </Grid>
     <Grid item xs={6} md={6} >
      <label>Género</label>
      <Select name="genero" value={form.genero} onChange={changeHandler} className="select">
       <MenuItem value="Femenino">Femenino</MenuItem>
       <MenuItem value="Masculino">Masculino</MenuItem>
       <MenuItem value="0tro">Otro</MenuItem>
      </Select>
     </Grid>

     <Grid item xs={6} md={6}>
      <label>Rol</label>
      <Select name="rol" value={form.rol} onChange={changeHandler}>
       <MenuItem value="2">Voluntario</MenuItem>
       <MenuItem value="3">Adoptante</MenuItem>
      </Select>
     </Grid>
    </Grid>
    <div className="container_button">
     <Button
      variant="contained"
      className="buttonForm"
      type="submit"
      onClick={handleSend}
     >
      Registrarse
     </Button>
     <Button variant="outlined" type="button" onClick={() => navigate("/")}>Cancelar</Button>
    </div>
   </div>
  </div>
  </div>
 );
};

export default Form;
