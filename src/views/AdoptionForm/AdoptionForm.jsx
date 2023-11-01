import React from "react";
import NavBar from "../NavBar/NavBar";
import "./AdoptionForm.css";
import facebook from "../../assets/img/redes/Facebook 1.svg";
import instagram from "../../assets/img/redes/instagram 1.svg";
import formato from "../../assets/pdf/formato.pdf";

function Home() {

    return (
        <div className="home">
            <NavBar />
            <h1>
                ¿Estás interesado en cambiar vidas y darle un hogar a un ser necesitado?
            </h1>
            <h2>
                ¡Entonces, estás en el lugar correcto! En SOFIadopciones, estamos buscando personas apasionadas y comprometidas que deseen adoptar y brindar amor a un compañero de cuatro patas.
            </h2>

            <p>
                Para comenzar tu emocionante viaje hacia la adopción, descarga el formulario de solicitud haciendo clic en el enlace a continuación. Una vez que hayas completado el formulario con cariño y cuidado, envíalo a nuestro equipo a través del correo electrónico admin@sofiadopciones.com.
            </p>

            <p>
                Para descargar el formulario PDF, haga clic en el siguiente botón:
            </p>
            <button type="button" >

                <a href={formato} target="_blank" rel="noopener noreferrer" download="adopciones.pdf">
                    Descargar formulario PDF
                </a>
            </button>

            <footer>
                <div className="cont-redes-img">
                    <img src={facebook} alt="logo" />
                    <img src={instagram} alt="logo" />
                </div>
                <p>Copyright © SOF&</p>
            </footer>
        </div>
    );
}

export default Home;