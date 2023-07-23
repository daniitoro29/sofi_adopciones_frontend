import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUsers } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";

function Login() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [redirectToRegister, setRedirectToRegister] = useState(false);
 const [message, setMessage] = useState("");
 const users = useSelector((state) => state.users);

 const handleSubmit = (e) => {
  e.preventDefault();
  setUsername(username);
  setPassword(password);
 };

 // {Usu_Correo: 'rubycorreahernandez@gmail.com', Usu_Contraseña: "12345678"}
 // {Usu_Correo: 'cristiancrz@gmail.com', Usu_Contraseña: "12345678"}
 // {Usu_Correo: 'gracielamunozchacon@gmail.com', Usu_Contraseña: "12345678"}
 // {Usu_Correo: "maikolarboleda@gmail.com", Usu_Contraseña: "1234567"}

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
   setRedirectToRegister(true);
  } else {
   setMessage("Por favor verifique los datos");
  }
 };

 return (
  <div>
   <NavBar />
   <div className="login-container">
    <form onSubmit={handleSubmit} className="login-form">
     <label>
      <p>Email:</p>
      <input
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />
     </label>
     <label>
      <p>Contraseña:</p>
      <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
     </label>
     <button type="submit" onClick={handlerValidateUser}>
      Ingresar
     </button>
    </form>
    {redirectToRegister ? (
     <Redirect to="/welcome" />
    ) : (
     <p className="login-message_fail">{message}</p>
    )}
   </div>
  </div>
 );
}

export default Login;
