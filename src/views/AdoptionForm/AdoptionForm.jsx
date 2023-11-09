import React, { useState, useContext, useEffect } from "react";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./AdoptionForm.css";
import { createForm, createAdopter } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { UserContext } from '../../Context/context';
import { useNavigate } from "react-router-dom";

const FormularioAdopcion = () => {
    const navigate = useNavigate();
    const { pets, users } = useContext(UserContext);
    const dispatch = useDispatch();
    const [nombrel, setNombre] = useState('')
    const [apellidol, setApellido] = useState('')
    const [idl, setId] = useState('')

    useEffect(() => {
        setNombre(localStorage.getItem('nombre'));
        setApellido(localStorage.getItem('apellido'))
        setId(localStorage.getItem('id'));
    }, []);

    const [formData, setFormData] = useState({
        Form_Nombre: `${nombrel} ${apellidol}`,
        Form_CedulaDocumento: "",
        Form_Edad: "",
        Form_TelefonoCasa: "",
        Form_Ocupacion: "",
        Form_Direccion: "",
        Form_Telefono: "",
        Form_Celular: "",
        Form_Correo: "",
        Form_NumeroPersonasFamilia: 1,
        Form_Adultos: 1,
        Form_Ninos: 0,
        Form_Bebes: 0,
        Form_EdadFamiliares: "",
        Form_MotivoAdopcion: "",
        Form_ExperienciaMascotasAntes: "",
        Form_CausasNoTenerMascotaAhora: "",
        Form_AutorizacionAdopcion: "",
        Form_DecisionMiembrosHogar: "",
        Form_AsuncionGastosMascota: "",
        Form_TienePatioTerrazaJardin: false,
        Form_Cubierto: false,
        Form_DestinoViviendaMascota: "",
        Form_LugarDormirMascota: "",
        Form_ConocimientoGastosMascota: "",
        Form_MascotasActuales: "",
        Form_PeriodoAjusteMascota: false,
    });

    const [form, setForm] = useState({
        usuId: '',
        masId: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [property]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(
                createForm({
                    Form_Nombre: formData.Form_Nombre,
                    Form_CedulaDocumento: formData.Form_CedulaDocumento,
                    Form_Edad: formData.Form_Edad,
                    Form_TelefonoCasa: formData.Form_TelefonoCasa,
                    Form_Ocupacion: formData.Form_Ocupacion,
                    Form_Direccion: formData.Form_Direccion,
                    Form_Telefono: formData.Form_Telefono,
                    Form_Celular: formData.Form_Celular,
                    Form_Correo: formData.Form_Correo,
                    Form_NumeroPersonasFamilia: formData.Form_NumeroPersonasFamilia,
                    Form_Adultos: formData.Form_Adultos,
                    Form_Ninos: formData.Form_Ninos,
                    Form_Bebes: formData.Form_Bebes,
                    Form_EdadFamiliares: formData.Form_EdadFamiliares,
                    Form_MotivoAdopcion: formData.Form_MotivoAdopcion,
                    Form_ExperienciaMascotasAntes: formData.Form_ExperienciaMascotasAntes,
                    Form_CausasNoTenerMascotaAhora: formData.Form_CausasNoTenerMascotaAhora,
                    Form_AutorizacionAdopcion: formData.Form_AutorizacionAdopcion,
                    Form_DecisionMiembrosHogar: formData.Form_DecisionMiembrosHogar,
                    Form_AsuncionGastosMascota: formData.Form_AsuncionGastosMascota,
                    Form_TienePatioTerrazaJardin: formData.Form_TienePatioTerrazaJardin,
                    Form_Cubierto: formData.Form_Cubierto,
                    Form_DestinoViviendaMascota: formData.Form_DestinoViviendaMascota,
                    Form_LugarDormirMascota: formData.Form_LugarDormirMascota,
                    Form_ConocimientoGastosMascota: formData.Form_ConocimientoGastosMascota,
                    Form_MascotasActuales: formData.Form_MascotasActuales,
                    Form_PeriodoAjusteMascota: formData.Form_PeriodoAjusteMascota,
                })
            );

            setFormData({
                Form_Nombre: "",
                Form_CedulaDocumento: "",
                Form_Edad: "",
                Form_TelefonoCasa: "",
                Form_Ocupacion: "",
                Form_Direccion: "",
                Form_Telefono: "",
                Form_Celular: "",
                Form_Correo: "",
                Form_NumeroPersonasFamilia: "",
                Form_Adultos: "",
                Form_Ninos: "",
                Form_Bebes: "",
                Form_EdadFamiliares: "",
                Form_MotivoAdopcion: "",
                Form_ExperienciaMascotasAntes: "",
                Form_CausasNoTenerMascotaAhora: "",
                Form_AutorizacionAdopcion: "",
                Form_DecisionMiembrosHogar: "",
                Form_AsuncionGastosMascota: "",
                Form_TienePatioTerrazaJardin: "",
                Form_Cubierto: "",
                Form_DestinoViviendaMascota: "",
                Form_LugarDormirMascota: "",
                Form_ConocimientoGastosMascota: "",
                Form_MascotasActuales: "",
                Form_PeriodoAjusteMascota: ""
            });

            Swal.fire("Sus datos se guardaron correctamente", "El formulario está en revisión", "success");
            handleSend();

        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire("Error", error.response.data.message, "error");
            } else {
                Swal.fire("Error", "Ocurrió un error al registrar la mascota", "error");
            }
        }
    };

    const handleSend = async () => {
        if (!idl || !form.masId) {
            Swal.fire('Error', 'Por favor, completa todos los campos', 'error');
            return;
        }

        try {
            await dispatch(
                createAdopter({
                    Usu_Id: idl,
                    Mas_Id: form.masId,
                })
            );

            setForm({
                Usu_Id: "",
                Mas_Id: "",
            });

           Swal.fire('¡Registro exitoso!', 'El participante se ha registrado correctamente', 'success');
           navigate("/gallery");
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
            <div className="adoptions">
                <h1>
                    ¿Estás interesado en cambiar vidas y darle un hogar a un ser necesitado?
                </h1>
                <h4>
                    ¡Entonces, estás en el lugar correcto! En SOFIadopciones, estamos buscando personas apasionadas y comprometidas que deseen adoptar y brindar amor a un compañero de cuatro patas.
                </h4>

                <p>
                    Para comenzar tu emocionante viaje hacia la adopción, diligencia el siguiente formulario.
                </p>

                <h2>Formulario de Adopción de Mascotas</h2>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <TextField
                                // label="Nombre y apellido"
                                name="Form_Nombre"
                                value={`${nombrel} ${apellidol}`}
                                //onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Cedula o Documento"
                                name="Form_CedulaDocumento"
                                value={formData.Form_CedulaDocumento}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Edad"
                                name="Form_Edad"
                                type="number"
                                value={formData.Form_Edad}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Teléfono de Casa"
                                name="Form_TelefonoCasa"
                                value={formData.Form_TelefonoCasa}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Ocupación"
                                name="Form_Ocupacion"
                                value={formData.Form_Ocupacion}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Dirección"
                                name="Form_Direccion"
                                value={formData.Form_Direccion}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Teléfono"
                                name="Form_Telefono"
                                value={formData.Form_Telefono}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Celular"
                                name="Form_Celular"
                                value={formData.Form_Celular}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Correo Electrónico"
                                name="Form_Correo"
                                type="email"
                                value={formData.Form_Correo}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Número de Personas en la Familia"
                                name="Form_NumeroPersonasFamilia"
                                type="number"
                                value={formData.Form_NumeroPersonasFamilia}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Número de Adultos en la Familia"
                                name="Form_Adultos"
                                type="number"
                                value={formData.Form_Adultos}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Número de Niños en la Familia"
                                name="Form_Ninos"
                                type="number"
                                value={formData.Form_Ninos}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                label="Número de Bebés en la Familia"
                                name="Form_Bebes"
                                type="number"
                                value={formData.Form_Bebes}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Edades de cada uno de los integrantes de la familia (Por favor separe las edades con un guión)"
                                name="Form_EdadFamiliares"
                                value={formData.Form_EdadFamiliares}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Por qué quiere adoptar un animal?"
                                name="Form_MotivoAdopcion"
                                value={formData.Form_MotivoAdopcion}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Ha tenido animales de compañía antes? Especifique cuál y por cuánto tiempo. "
                                name="Form_ExperienciaMascotasAntes"
                                value={formData.Form_ExperienciaMascotasAntes}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Por qué no lo tiene ahora? Explicar las causas."
                                name="Form_CausasNoTenerMascotaAhora"
                                value={formData.Form_CausasNoTenerMascotaAhora}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Quién autoriza la adopción del animal?"
                                name="Form_AutorizacionAdopcion"
                                value={formData.Form_AutorizacionAdopcion}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Comparten esta decisión el resto de miembros del hogar?"
                                name="Form_DecisionMiembrosHogar"
                                value={formData.Form_DecisionMiembrosHogar}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Quién va a asumir los gastos derivados del animal?"
                                name="Form_AsuncionGastosMascota"
                                value={formData.Form_AsuncionGastosMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth>
                                <InputLabel>¿Su vivienda tiene patio, terraza o jardín?</InputLabel>
                                <Select
                                    name="Form_TienePatioTerrazaJardin"
                                    value={formData.Form_TienePatioTerrazaJardin}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                >
                                    <MenuItem value={true}>Sí</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth>
                                <InputLabel> Si es así, ¿es cubierto? </InputLabel>
                                <Select
                                    name="Form_Cubierto"
                                    value={formData.Form_Cubierto}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                >
                                    <MenuItem value={true}>Sí</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Qué lugar de la vivienda estaría destinado al perro/gato?"
                                name="Form_DestinoViviendaMascota"
                                value={formData.Form_DestinoViviendaMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label=" ¿En dónde dormiría el animal?"
                                name="Form_LugarDormirMascota"
                                value={formData.Form_LugarDormirMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Conoce los gastos que implica tener un animal?"
                                name="Form_ConocimientoGastosMascota"
                                value={formData.Form_ConocimientoGastosMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="¿Tiene actualmente mascotas? ¿Cuál (es)? "
                                name="Form_MascotasActuales"
                                value={formData.Form_MascotasActuales}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend"> ¿Está dispuesto a que la mascota tenga un periodo de ajuste en el que aprenda dónde debe ir
                                    al baño y se adapte a la familia? </FormLabel>
                                <RadioGroup
                                    name="Form_PeriodoAjusteMascota"
                                    value={formData.Form_PeriodoAjusteMascota.toString()}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Sí" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
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


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </>
    );
};

export default FormularioAdopcion;
