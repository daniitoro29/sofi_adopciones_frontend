import React, { useEffect, useState, useContext } from "react";
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
import { UserContext } from '../../Context/context';
import axios from 'axios'; 

function Login() {
    const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tokenExpiration, setTokenExpiration] = useState(0);
    const users = useSelector((state) => state?.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    let foundUser 
    const handlerValidateUser = async () => { // Marca la función como asíncrona
        if (username === '' || password === '') {
            Swal.fire("Error", "Por favor diligencie todos los campos", "error");
        } else {
            foundUser = users?.find(user => user.Usu_Correo === username);

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

            try {
                const response = await axios.post('http://localhost:3001/login', {
                    username: username,
                    password: password,
                    users: users,
                });

                if (response.data.token) {
                    localStorage.setItem('authToken', response.data.token);
                    localStorage.setItem('rolUser', foundUser.Rol_Id);
                    setTokenExpiration(Date.now() + 10 * 60 * 1000);
                    setIsAuthenticated(true);
                    // Redirige a la página principal o a la página deseada.

                    setTimeout(() => {
                        localStorage.removeItem('authToken');
                        localStorage.removeItem('rolUser');
                        setIsAuthenticated(false);
                        console.log('Se ejecuto el timeout ****')
                    }, 10 * 60 * 1000);
                    switch (foundUser.Rol_Id) {
                        case 1:
                            navigate("/admin")
                            break;
                        case 2:
                            navigate("/volunteer")
                            break;
                        default:
                            navigate("/gallery")
                    }
                } else {
                    Swal.fire('Error', 'Credenciales incorrectas', 'error');
                }
            } catch (error) {
                console.error('Error de autenticación', error);
                Swal.fire('Error', 'Error de autenticación', 'error');
            }
        }
    };

    return (
        <div className="login">
            <NavBar />
            <div style={{ display: "flex", justifyContent: "center", height: "66.2vh" }}>
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
                            className="login_button"
                            variant="outlined"
                            type="button"
                            onClick={() => navigate("/register")}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handlerValidateUser();
                                }
                            }}
                        >
                            Regístrate
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
