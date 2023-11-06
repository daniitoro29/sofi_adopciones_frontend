import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createParticipant } from '../../../../redux/actions'; // Asegúrate de importar la acción correcta
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../../../NavBar/NavBar';

const ParticipantForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    camId: '',
    volId: '',
    adoUserId: '',
    masId: '',
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
    if (!form.camId || !form.volId || !form.adoUserId || !form.masId) {
      Swal.fire('Error', 'Por favor, completa todos los campos', 'error');
      return;
    }

    try {
      await dispatch(
        createParticipant({
          Cam_Id: form.camId,
          Vol_Id: form.volId,
          Ado_User_Id: form.adoUserId,
          Mas_Id: form.masId,
        })
      );

      setForm({
        camId: '',
        volId: '',
        adoUserId: '',
        masId: '',
      });

      Swal.fire('¡Registro exitoso!', 'El participante se ha registrado correctamente', 'success');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire('Error', error.response.data.message, 'error');
      } else {
        Swal.fire('Error', 'Ocurrió un error al registrar el participante', 'error');
      }
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="general-container_formp">
          <h1>Completa los datos del participante de la campaña</h1>
          <Grid container className="container_form">
            <Grid item xs={6} md={6}>
              <label>ID de la Campaña</label>
              <TextField
                id="form_input"
                variant="standard"
                type="number"
                name="camId"
                value={form.camId}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>ID del Voluntario</label>
              <TextField
                variant="standard"
                type="number"
                name="volId"
                value={form.volId}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>ID del Usuario de Adopción</label>
              <TextField
                variant="standard"
                type="number"
                name="adoUserId"
                value={form.adoUserId}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>ID de la Mascota</label>
              <TextField
                variant="standard"
                type="number"
                name="masId"
                value={form.masId}
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          <div className="container_button">
            <Button
              variant="contained"
              className="buttonForm"
              type="submit"
              onClick={handleSend}
            >
              Registrar participante
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticipantForm;
