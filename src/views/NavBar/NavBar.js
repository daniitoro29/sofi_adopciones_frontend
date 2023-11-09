import "../NavBar/NavBar.css";
import logo5 from '../../assets/img/logo5.png';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../../Context/context';

function NavBar() {
  const { setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isCampaña, setIsCampaña] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlerRegister = () => {
    setIsRegister(!isRegister);
    navigate("/register");
  };


  const handlerLogin = () => {
    setIsLogin(!isLogin);
    navigate("/login");
  }

  const handlerGallery = () => {
    setIsGallery(!isGallery);
    navigate("/gallery");
  }

  const handlerCampaña = () => {
    setIsCampaña(!isCampaña);
    navigate("/campana");
  }

  const handlerLeft = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    navigate("/");
  }

  const handlerAdmin = () => {
    navigate("/admin");
  }

  return (
    <div className="container-general_nav">
      <nav>
        <a href="/">
          <img src={logo5} alt="logo5" />
        </a>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <li > <Link to="/">Inicio</Link></li>
          <li onClick={handlerGallery}>Galería</li>
          <li onClick={handlerCampaña}>Campañas</li>
          <li onClick={handlerRegister}>Registrate</li>
          <li onClick={handlerAdmin}>Administrador</li>
          <li>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Ingresar"
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={handlerLogin}>Ingresar</NavDropdown.Item>
            <NavDropdown.Item onClick={handlerLeft}>
              Salir
            </NavDropdown.Item>
          </NavDropdown></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;