import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import perro1 from "../../assets/img/img-perros-1.png";
import perro2 from "../../assets/img/img-perros-2.png";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

function Home() {
  return (
    <>
      <NavBar />
    <div className="home">
      <h1>
        ¡Bienvenido a nuestra pagina de adopciones y campañas de animales rescatados
      </h1>

      <p>
        En nuestro sitio web, nos apasiona conectar animales con hogares amorosos.
        Creemos Firmemente que cada perro merece tener un lugar seguro y cariñoso al
        que llama hogar. Nuestro objetivo es fomentar la adopción responsable y
        crear conciencia sobre la importancia de brindarles una segunda oportunidad
        a estos maravillosos compañeros de cuatro patas.
      </p>
      <div className="description">
        <img src={perro1} alt="perro1" />
        <p>
          En esta plataforma, nos apasiona brindar apoyo y ayuda a las mascotas
          necesitadas. Creemos en el amor incondicional que los animales nos brindan
          y nos esforzamos por garantizar que cada mascota reciba el cuidado y el
          hogar amoroso que merecen.
        </p>
        <img src={perro2} alt="perro2" />
      </div>

      <h2>¿Como nos puedes apoyar?</h2>
      <div className="cont-parrafos">
        <p>
          Como voluntario tendras brindan la oportunidad de participar en
          emocionantes campañas y eventos que ayudan a crear conciencia y recaudar
          fondos para la Fundacion de mascotas.
        </p>
        <p>
          ¿Estas buscando una nueva mascota para tu hogar?En nuestra pagina,
          encontràras una amplia variedad de mascotas disponibles para adopciòn.
        </p>
        <p>
          Como donador, puedes contribuir de diversas formas, desde donaciones ùnicas
          hasta donaciones periòdicas. Cada aporte es valioso y nos ayuda a continuar
          nuestro trabajo en beneficio de las mascotas màs necesitados.
        </p>
      </div>
      <p className="agradecimiento">
        ¡Gracias por visitar nuestro sitio, puedes escribirnos en nuestra redes
        sociales y por considerar la adopciòn como una opciòn de amor! <br /> Una
        opciòn de amor!
      </p>
    </div>
{/*       <footer>
        <div className="cont-redes-img">
          <img src={facebook} alt="logo" />
          <img src={instagram} alt="logo" />
          <img src={twitter} alt="logo" />
        </div>
        <p>Copyright © SOF&</p>
      </footer> */}
      <Footer/>
    </>
  );
}

export default Home;
