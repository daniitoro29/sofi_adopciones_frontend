import { Redirect } from "react-router-dom";
import { useState } from "react";

import "../Home/Home.css";

function Home() {
  const [isRegister, setIsRegister] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);

  const handlerRegister = () => {
    setIsRegister(true);
  };

  const handlerUser = () => {
    setShowUser(true);
  };

  const handlerLogin = () => {
    setIsLogin(true);
  }

  if (isRegister) {
    return <Redirect to="/register" />;
  }
  if (showUser) {
    return <Redirect to="/users" />;
  }
  if (isLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container-general_home">
      <nav>
        <ul>
          <img
            src="https://peluditosconfuturo.org/wp-content/uploads/2015/01/logo2.png"
            alt="log"
          />

          <ol>
            <p>Inicio</p>
          </ol>
          <ol>
            <p>Acerca de nosotros</p>
          </ol>
          <ol>
            <p>Adopciones</p>
          </ol>
          <ol>
            <p onClick={handlerRegister}>Registrate</p>
          </ol>
          <ol>
            <p onClick={handlerUser}>Usuarios</p>
          </ol>
          <ol>
            <p onClick={handlerLogin}>Ingresar</p>
          </ol>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
