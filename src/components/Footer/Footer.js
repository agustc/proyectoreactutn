import "./FooterStyle.css"
import React from "react";

import fruti from "../assets/fruti.png"
const Footer= () =>{
    return(
<div className="footer-main-container">
    <div className="top">
        <div>
            <img className="footer-logo"
            src={fruti}
            alt ="frutillafo "       />

            <h1>Fresa</h1>
            <p>Amamos lo sano,rico y natural! </p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>

            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>

            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>

    </div>
    
    <div className="bottom">
            <div>
                <h4>Tienda</h4>
                <a href="/">Alacena</a>
                <a href="/">Cosmetica</a>
                <a href="/">Congelados</a>
                <a href="/">Zonas de envio</a>
            </div>

            <div>
                <h4>Nosotros</h4>
                <a href="/">¿Quienes somos?</a>
                <a href="/">¿Como funciona?</a>
                <a href="/">Politica de devolucion</a>
                <a href="/">Ayudanos a mejorar</a>
            </div>

            <div>
                <h4>Contactanos</h4>
                <a href="/"><i class="fa-brands fa-whatsapp">1123456898</i></a>
                <a href="/"><i class="fa-regular fa-envelope"></i>hola@fresa.com.ar</a>
                <a href="/"><i class="fa-solid fa-location-dot"></i>Bariloche</a>
                
            </div>

            

    </div>

</div>

    )

}
export default Footer;