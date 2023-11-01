import "../NavBar/NavBar.css";
import logo from '../../assets/img/logo5.png';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);
  const [ isGallery, setIsGallery ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlerRegister = () => {
    setIsRegister(true);
  };


  const handlerLogin = () => {
    setIsLogin(true);
  }

  const handlerGallery = () => {
    setIsGallery(true);
  }

  if (isRegister) {
    return <Navigate  to="/register" />;
  }
  if (isLogin) {
    return <Navigate  to="/login" />;
  }
  if (isGallery) {
    return <Navigate  to="/gallery" />;
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
          <li > <Link to="/">Inicio</Link></li>
          {/* <li>Acerca de nosotros</li> */}
          <li onClick={handlerGallery}>Galería</li>
          <li onClick={handlerRegister}>Registrate</li>
          <li onClick={handlerLogin}>Ingresar</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;