import "../NavBar/NavBar.css";
import logo5 from '../../assets/img/logo5.png';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);
  const [ isGallery, setIsGallery ] = useState(false);
  const [ isCampaña, setIsCampaña ] = useState(false);

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

  return (
    <div className="container-general_home">
      <nav>
        <a href="/">
          <img src={logo5} alt="logo5" />
        </a>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <li > <Link to="/">Inicio</Link></li>
          {/* <li>Acerca de nosotros</li> */}
          <li onClick={handlerGallery}>Galería</li>
          <li onClick={handlerCampaña}>Campañas</li>
          <li onClick={handlerRegister}>Registrate</li>
          <li onClick={handlerLogin}>Ingresar</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;