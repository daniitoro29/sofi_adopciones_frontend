import * as React from "react";
import "./ModalEdit.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {  editUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

function ModalEdit({ form, setOpen, open, setForm, userState }) {
  const dispatch = useDispatch();
 const handleClose = () => setOpen(false);

  const changeHandler = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setForm({
   ...form,
   [property]: value,
  });
 }; 

 console.log('Este es el form', form);

    const handlerUpdate = () => {
  dispatch(
   editUser({
    Usu_Id: userState,
    Rol_Id: form.rol,
    Usu_Nombre: form.nombre,
    Usu_Apellido: form.apellido,
    Usu_Telefono: form.telefono,
    Usu_Correo: form.correo,
    Usu_Contraseña: form.contraseña,
    Usu_Genero: form.genero,
    Usu_Estado: form.estado,
   })
  );
  handleClose();
 }; 

 return (
  <div className="general-container-edit-modal">
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <div style={{ display: "flex", justifyContent: "center" }}>
     <div className="container-edit-modal">
      <h1>Completa los datos que quieres modificar</h1>
      <Grid container className="edit-modal">
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
        <label>Género</label>
        <Select
         name="genero"
         value={form.genero}
         onChange={changeHandler}
        className="select"
        >
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
        onClick={() =>handlerUpdate()}
       >
        Confirmar
       </Button>
       <Button variant="outlined" type="button" onClick={() => handleClose()}>
        Cancelar
       </Button>
      </div>
     </div>
    </div>
   </Modal>
  </div>
 );
}

export default ModalEdit;
