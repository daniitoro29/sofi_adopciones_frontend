import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPet, getVolunteers } from "../../../../redux/actions";
import Swal from "sweetalert2";
import "./Pets.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NavBar from "../../../NavBar/NavBar";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from '../../../../Context/context';

const Form = () => {
   const {users} = useContext(UserContext);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const volunteers = useSelector((state) => state?.volunteers);
   // const users = useSelector((state) => state?.users)  ;
   const [volunteerData, setVolunteerData] = useState([]);
   const [form, setForm] = useState({
      nombre: "",
      especie: "",
      genero: "",
      raza: "",
      tamano: "",
      descripcion: "",
      foto: "",
      fecha_rescate: "",
      lugar_rescate: "",
      edad: "",
      estado_adopcion: "",
      vol_id: ""
   });

   useEffect(() => {
      dispatch(getVolunteers());
      const rescueVolunteers = volunteers.filter((volunteer) => volunteer.Vol_Tipo_Ayuda === "Rescate");
      const volunteerFilter = rescueVolunteers.map((volunteer) => {
         return {
            Vol_Id: volunteer.Vol_Id,
            nombre: users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Nombre,
            apellido: users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Apellido,
         };
      });
      setVolunteerData(volunteerFilter);
   }, [users]);

   const changeHandler = (event) => {
      const property = event.target.name;
      const value = event.target.value;

      setForm({
         ...form,
         [property]: value,
      });
   };

   const handleSend = async () => {

      if (!form.nombre || !form.especie || !form.genero || !form.raza || !form.tamano || !form.descripcion || !form.fecha_rescate || !form.lugar_rescate || !form.edad || !form.estado_adopcion || !form.vol_id) {
         Swal.fire("Error", "Por favor, completar todos los campos", "error");
         return;
      }

      if (form.nombre.length < 3 || form.especie < 3 || form.raza < 3 || form.descripcion < 3 || form.lugar_rescate < 3) {
         Swal.fire("Error", "Por favor ingrese un valor válido", "error");
         return;
      }
      try {
         await dispatch(
            createPet({
               Mas_Nombre: form.nombre,
               Mas_Especie: form.especie,
               Mas_Genero: form.genero,
               Mas_Raza: form.raza,
               Mas_Tamano: form.tamano,
               Mas_Descripcion: form.descripcion,
               Mas_Foto: form.foto,
               Mas_Fecha_Rescate: form.fecha_rescate,
               Mas_Lugar_Rescate: form.lugar_rescate,
               Mas_Edad: form.edad,
               Mas_Estado_Adopcion: form.estado_adopcion,
               Vol_Id: form.vol_id
            })
         );

         setForm({
            nombre: "",
            especie: "",
            genero: "",
            raza: "",
            tamano: "",
            descripcion: "",
            foto: "",
            fecha_rescate: "",
            lugar_rescate: "",
            edad: "",
            estado_adopcion: "",
            vol_id: ""
         });

         Swal.fire("¡Registro exitoso!", "La mascota se ha creado correctamente", "success");
      } catch (error) {
         if (error.response && error.response.status === 400) {
            Swal.fire("Error", error.response.data.message, "error");
         } else {
            Swal.fire("Error", "Ocurrió un error al registrar la mascota", "error");
         }
      }
   };


   return (
      <>
         <NavBar />
         <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="general-container_formp">
               <h1>Completa los datos de la mascota</h1>
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
                     <label>Especie</label>
                     <TextField
                        variant="standard"
                        type="text"
                        name="especie"
                        value={form.especie}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Género</label>
                     <Select name="genero" value={form.genero} onChange={changeHandler} className="select">
                        <MenuItem value="Macho">Macho</MenuItem>
                        <MenuItem value="Hembra">Hembra</MenuItem>
                     </Select>
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Raza</label>
                     <TextField
                        variant="standard"
                        type="text"
                        name="raza"
                        value={form.raza}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Tamaño</label>
                     <Select name="tamano" value={form.tamano} onChange={changeHandler} className="select">
                        <MenuItem value="Grande">Grande</MenuItem>
                        <MenuItem value="Mediano">Mediano</MenuItem>
                        <MenuItem value="Pequeño">Pequeño</MenuItem>
                     </Select>
                  </Grid>

                  <Grid item xs={6} md={6} >
                     <label>Descripción</label>
                     <textarea
                     className="text_area"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={changeHandler}
                        rows="4" // You can adjust the number of rows as needed
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Foto</label>
                     <TextField
                        type="text" // Use "text" type for URLs
                        variant="standard"
                        name="foto"
                        value={form.foto}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Fecha del rescate</label>
                     <TextField
                        type="date"
                        variant="standard"
                        name="fecha_rescate"
                        value={form.fecha_rescate}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Lugar del rescate</label>
                     <TextField
                        type="text"
                        variant="standard"
                        name="lugar_rescate"
                        value={form.lugar_rescate}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Edad</label>
                     <TextField
                        type="number"
                        variant="standard"
                        name="edad"
                        value={form.edad}
                        onChange={changeHandler}
                     />
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Estado de adopción</label>
                     <Select name="estado_adopcion" value={form.estado_adopcion} onChange={changeHandler}>
                        <MenuItem value="Disponible">Disponible</MenuItem>
                        <MenuItem value="Adoptado">Adoptado</MenuItem>
                        <MenuItem value="En proceso">En proceso</MenuItem>
                     </Select>
                  </Grid>

                  <Grid item xs={6} md={6}>
                     <label>Rescatista</label>
                     <Select name="vol_id" value={form.vol_id} onChange={changeHandler}>
                        {volunteerData?.map((volunteer, i) => (
                           <MenuItem key={i} value={volunteer?.Vol_Id}>
                              {volunteer.nombre} {volunteer.apellido}
                           </MenuItem>
                        ))
                        }
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
                     Registrar mascota
                  </Button>
                  <Button variant="outlined" type="button" onClick={() => navigate("/")}>
                     Cancelar
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Form;