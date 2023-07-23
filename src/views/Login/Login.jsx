import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUsers } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";

function Login() {
 const history = useHistory();
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [redirectToRegister, setRedirectToRegister] = useState(false);
 const users = useSelector((state) => state.users);

 const handleSubmit = (e) => {
  e.preventDefault();
  setUsername(username);
  setPassword(password);
 };

 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getUsers());
  // eslint-disable-next-line
 }, []);

 const handlerValidateUser = () => {
  const userResult = users.filter(
   (user) => user.Usu_Correo === username && user.Usu_Contraseña === password
  );

  if (userResult.length > 0) {
   history.push("/welcome");
  } else {
    Swal.fire("Error", "Por favor verifique los datos", "error");
  }
 };

 return (
  <div>
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
      <Button variant="outlined" type="button" onClick={() => history.push("/register")}>Registrate</Button>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Login;
