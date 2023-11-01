import * as React from "react";
import "./ModalEditPet.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { editPet, getPets } from "../../redux/actions";
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



  const handlerUpdate = () => {
    dispatch(
      editPet({
        Mas_Id: userState,
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
        Mas_Estado_Adopcion: form.estado_adopcion

      }));
    handleClose();
    dispatch(getPets())
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
          <div className="container-edit-modal-pet">
            <h1>Completa los datos que quieres modificar</h1>
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

              <Grid item xs={6} md={6}>
                <label>Descripción</label>
                <textarea
                  className="general-container-edit-modal-description"
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

            </Grid>
            <div className="container_button">
              <Button
                variant="contained"
                className="buttonForm"
                type="submit"
                onClick={() => handlerUpdate()}
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
