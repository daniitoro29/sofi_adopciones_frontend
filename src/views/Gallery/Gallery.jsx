import { useContext, useEffect } from "react";
import { UserContext } from '../../Context/context';
import Carousel from 'react-bootstrap/Carousel';
import "../Gallery/Gallery.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const baseClassName = "gallery-container";

function Gallery() {
  const navigate = useNavigate();
  const { pets } = useContext(UserContext);

  useEffect(() => {

  }, [pets]);

  return (
    <>
      <NavBar />
      <div className={`${baseClassName} d-block mx-auto`}>

        <Carousel>
          {pets.map((pet, index) => {
            return pet?.Mas_Estado_Adopcion === "Disponible" ? (
              <Carousel.Item key={index} interval={15500} className={`${baseClassName}_carousel`}>
                <div className="container-image">
                <img
                  className={`d-block w-auto ${baseClassName}_img`}
                  src={pet?.Mas_Foto}
                  alt={pet?.Mas_Nombre}
                />
                </div>
                <Carousel.Caption>
                  <h3>{pet?.Mas_Nombre}</h3>
                  <p>Especie: {pet?.Mas_Especie}</p>
                  <p>Edad: {pet?.Mas_Edad}</p>
                  <p>Raza: {pet?.Mas_Raza}</p>
                  <p>Tamaño: {pet?.Mas_Tamano}</p>
                  <p>Descripción: {pet?.Mas_Descripcion}</p>
                  <Button
                    className="button-gallery"
                    variant="outlined"
                    type="button"
                    onClick={() => navigate("/adoptions")}
                  >
                    Adopta a {pet?.Mas_Nombre}
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null;
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Gallery;
