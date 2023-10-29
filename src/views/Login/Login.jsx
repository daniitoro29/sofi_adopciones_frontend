import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const users = useSelector((state) => state?.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line
    }, []);

    const handlerValidateUser = () => {

        if (username === '' || password === '') {

            Swal.fire("Error", "Por favor diligencie todos los campos", "error");
        } else {
            const foundUser = users.find(user => user.Usu_Correo === username);
            console.log('Esto es lo que llega en los usuarios ****', foundUser);
            if (!foundUser) {
                Swal.fire("Error", "El correo ingresado es incorrecto", "error");
                return;
            }

            if (foundUser.Usu_Contraseña !== password) {
                Swal.fire("Error", "Contraseña incorrecta", "error");
                return;
            }

            if (foundUser.Usu_Estado === "Inactivo") {
                Swal.fire("Usuario inactivo", "El usuario está inactivo. Por favor, contacta a soporte para resolver el problema.", "error");
                return;
            }

            foundUser.Rol_Id === 1 ? navigate("/admin") : navigate("/welcome");
        }

    };

    return (
        <div className="login">
            <NavBar />

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="general-container_login">
                    <h1>¡Hola! Ingresa a tu cuenta</h1>
                    <Grid container className="container_login">
                        <Grid item>
                            <label>Correo electrónico</label>
                            <TextField
                                type="email"
                                variant="standard"
                                name="correo"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <label>Contraseña</label>
                            <TextField
                                type="password"
                                variant="standard"
                                name="contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <div className="container_button">
                        <Button
                            variant="contained"
                            className="buttonForm"
                            type="submit"
                            onClick={handlerValidateUser}
                        >
                            Iniciar sesión
                        </Button>
                        <Button
                            variant="outlined"
                            type="button"
                            onClick={() => navigate("/register")}
                        >
                            Registrate
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
