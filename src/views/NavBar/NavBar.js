import { Redirect } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/img/logo3.png';

import "../NavBar/NavBar.css";

function NavBar() {
    // URL logo
    // https://logo-maker.freelogodesign.org/es/logo/edit/d273ed61a03749f5917f70b689935771
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
            src={logo}
            alt="logo"
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

export default NavBar;
