import "../NavBar/NavBar.css";
import logo from '../../assets/img/logo5.png';
import { Redirect } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <li>Inicio</li>
          <li>Acerca de nosotros</li>
          <li>Adopciones</li>
          <li onClick={handlerRegister}>Registrate</li>
          <li onClick={handlerUser}>Usuarios</li>
          <li onClick={handlerLogin}>Ingresar</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;