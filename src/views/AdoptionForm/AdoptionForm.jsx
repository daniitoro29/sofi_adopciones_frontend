import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, FormLabel, FormGroup, Checkbox } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./AdoptionForm.css";

const FormularioAdopcion = () => {
    const [formData, setFormData] = useState({
        Form_Nombre: "",
        Form_CedulaDocumento: "",
        Form_Edad: 0,
        Form_TelefonoCasa: "",
        Form_Ocupacion: "",
        Form_Direccion: "",
        Form_Telefono: "",
        Form_Celular: "",
        Form_Correo: "",
        Form_NumeroPersonasFamilia: 0,
        Form_Adultos: 0,
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                label="Nombre"
                                name="Form_Nombre"
                                value={formData.Form_Nombre}
                                onChange={handleChange}
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
                                label="Edades de los Familiares"
                                name="Form_EdadFamiliares"
                                value={formData.Form_EdadFamiliares}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Motivo de Adopción"
                                name="Form_MotivoAdopcion"
                                value={formData.Form_MotivoAdopcion}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Experiencia con Mascotas Antes"
                                name="Form_ExperienciaMascotasAntes"
                                value={formData.Form_ExperienciaMascotasAntes}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Causas para no Tener Mascota Ahora"
                                name="Form_CausasNoTenerMascotaAhora"
                                value={formData.Form_CausasNoTenerMascotaAhora}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Autorización para la Adopción"
                                name="Form_AutorizacionAdopcion"
                                value={formData.Form_AutorizacionAdopcion}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Decisión de los Miembros del Hogar"
                                name="Form_DecisionMiembrosHogar"
                                value={formData.Form_DecisionMiembrosHogar}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Asunción de Gastos de la Mascota"
                                name="Form_AsuncionGastosMascota"
                                value={formData.Form_AsuncionGastosMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth>
                                <InputLabel>Tiene Patio, Terraza o Jardín</InputLabel>
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
                                <InputLabel>¿Está Cubierto?</InputLabel>
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
                                label="Destino de la Vivienda para la Mascota"
                                name="Form_DestinoViviendaMascota"
                                value={formData.Form_DestinoViviendaMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Lugar de Dormir de la Mascota"
                                name="Form_LugarDormirMascota"
                                value={formData.Form_LugarDormirMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Conocimiento de Gastos de la Mascota"
                                name="Form_ConocimientoGastosMascota"
                                value={formData.Form_ConocimientoGastosMascota}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Mascotas Actuales"
                                name="Form_MascotasActuales"
                                value={formData.Form_MascotasActuales}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">¿Acepta un período de ajuste para la mascota?</FormLabel>
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
