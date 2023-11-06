import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCampaign } from '../../../../redux/actions'; 
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../../../NavBar/NavBar';

const CampaignForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    lugar: '',
    descripcion: '',
    fechaCampaña: '',
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
    if (!form.lugar || !form.descripcion || !form.fechaCampaña) {
      Swal.fire('Error', 'Por favor, completa todos los campos', 'error');
      return;
    }

    try {
      await dispatch(
        createCampaign({
          Cam_Lugar: form.lugar,
          Cam_Descripcion: form.descripcion,
          Cam_Fecha_Campaña: form.fechaCampaña,
        })
      );

      setForm({
        lugar: '',
        descripcion: '',
        fechaCampaña: '',
      });

      Swal.fire('¡Registro exitoso!', 'La campaña se ha creado correctamente', 'success');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire('Error', error.response.data.message, 'error');
      } else {
        Swal.fire('Error', 'Ocurrió un error al registrar la campaña', 'error');
      }
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="general-container_formp">
          <h1>Completa los datos de la campaña</h1>
          <Grid container className="container_form">
            <Grid item xs={6} md={6}>
              <label>Lugar</label>
              <TextField
                id="form_input"
                variant="standard"
                type="text"
                name="lugar"
                value={form.lugar}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>Descripción</label>
              <TextField
                variant="standard"
                type="text"
                name="descripcion"
                value={form.descripcion}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>Fecha de la campaña</label>
              <TextField
                type="date"
                variant="standard"
                name="fechaCampaña"
                value={form.fechaCampaña}
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
              Registrar campaña
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignForm;
