import { useContext, useEffect } from "react";
import { UserContext } from '../../Context/context';
import Carousel from 'react-bootstrap/Carousel';
import "../Gallery/Gallery.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const baseClassName = "gallery-container";

function Gallery() {
  const navigate = useNavigate();
  const { pets } = useContext(UserContext);

  useEffect(() => {

  }, [pets]);

  return (
    <div className={`${baseClassName} d-block mx-auto`}>
      <Carousel>
        {pets.map((pet, index) => (
          <Carousel.Item key={index} interval={15500} className={`${baseClassName}_carousel`}>
            <img
              className={`d-block w-auto ${baseClassName}_img`}
              src={pet.Mas_Foto}
              alt={pet.Mas_Nombre}
            />
            <Carousel.Caption>
              <h3>{pet.Mas_Nombre}</h3>
              <p>Especie: {pet.Mas_Especie}</p>
              <p>Edad: {pet.Mas_Edad}</p>
              <p>Raza: {pet.Mas_Raza}</p>
              <p>Tamaño: {pet.Mas_Tamano}</p>
              <p>Descripción: {pet.Mas_Descripcion}</p>
              <Button
                variant="outlined"
                type="button"
                onClick={() => navigate("/adoptions")}
              >
                Registrate
              </Button>
            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
