import "./Footer";
import facebook from "../../assets/img/redes/Facebook 1.svg";
import instagram from "../../assets/img/redes/instagram 1.svg";
import twitter from "../../assets/img/redes/twitter 1.svg";


function Footer() {
 return (
   <footer>
    <div className="cont-redes-img">
     <img src={facebook} alt="logo" />
     <img src={instagram} alt="logo" />
     <img src={twitter} alt="logo" />
    </div>
    <p>Copyright © SOF&</p>
   </footer>

 );
}

export default Footer;