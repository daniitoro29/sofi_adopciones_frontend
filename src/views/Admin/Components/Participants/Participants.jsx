import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createParticipant } from '../../../../redux/actions'; // Asegúrate de importar la acción correcta
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { UserContext } from '../../../../Context/context';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import "./Participants.css";

const ParticipantForm = () => {
    const dispatch = useDispatch();
    const { campaigns, volunteers, pets, adopter, users } = useContext(UserContext);
    const [volunteersData, setvolunteersData] = useState([]);
    const [adoptersData, setadoptersData] = useState([]);


    useEffect(() => {
        const volunteerFilter = volunteers.map((volunteer) => {
            return {
                Vol_Id: volunteer.Vol_Id,
                nombre: users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Nombre,
                apellido: users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Apellido,
            };
        });

        const adopterFilter = adopter.map((adopte) => {
            return {
                Ado_User_Id: adopte.Ado_User_Id,
                nombre: users.find((user) => user.Usu_Id === adopte.Usu_Id).Usu_Nombre,
                apellido: users.find((user) => user.Usu_Id === adopte.Usu_Id).Usu_Apellido,
            };
        });
        setvolunteersData(volunteerFilter);
        setadoptersData(adopterFilter);
    }, []);

    

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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="general-container_formp-participant">
                    <h1>Completa los datos del participante de la campaña</h1>
                    <Grid container className="container_form">

                        <Grid item xs={6} md={6}>
                            <label>Campaña</label>
                            <Select name="camId" value={form.camId} onChange={changeHandler}>
                                {campaigns?.map((campaign, i) => (
                                    <MenuItem key={i} value={campaign?.Cam_Id}>
                                        {campaign.Cam_Lugar}
                                    </MenuItem>
                                ))
                                }
                            </Select>
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <label>Voluntario</label>
                            <Select name="volId" value={form.volId} onChange={changeHandler}>
                                {volunteersData?.map((volunteer, i) => (
                                    <MenuItem key={i} value={volunteer?.Vol_Id}>
                                        {volunteer.nombre} {volunteer.apellido}
                                    </MenuItem>
                                ))
                                }
                            </Select>
                        </Grid>



                        <Grid item xs={6} md={6}>
                            <label>Adoptante</label>
                            <Select name="adoUserId" value={form.adoUserId} onChange={changeHandler}>
                                {adoptersData?.map((adopte, i) => (
                                    <MenuItem key={i} value={adopte?.Ado_User_Id}>
                                        {adopte.nombre} {adopte.apellido}
                                    </MenuItem>
                                ))
                                }
                            </Select>
                        </Grid>


                        <Grid item xs={6} md={6}>
                            <label>Mascota</label>
                            <Select name="masId" value={form.masId} onChange={changeHandler}>
                                {pets?.map((pet, i) => (
                                    <MenuItem key={i} value={pet?.Mas_Id}>
                                        {pet.Mas_Nombre}
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
                            Registrar participante
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParticipantForm;
