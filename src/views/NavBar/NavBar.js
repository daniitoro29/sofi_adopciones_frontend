import { useState } from "react";
import logo from '../../assets/img/logo5.png';
import "../NavBar/NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <li>Registrate</li>
          <li>Usuarios</li>
          <li>Ingresar</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;