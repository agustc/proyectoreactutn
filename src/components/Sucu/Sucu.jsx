import "./sucurs.css";
import tiendamermelada from "../assets/tiendamermelada.jpg"
import tiendapanes from  "../assets/tiendapanes.jpg"
import verdurass from  "../assets/verdurass.jpg"
import React from 'react'
export const Sucu = () => {
    return (
        <>
     
<section class="features" id="features">

    <h1 class="heading">Sucursales </h1>

    <div class="box-container">

        <div class="box">
            <img src={tiendamermelada} alt=""/>
            <h3>Palermo </h3>
            <p>Av. Santa Fe 8000</p>
            <a href="https://goo.gl/maps/9satLPj21JCa3tsK8 "class="btn-us">Ir al mapa Mapa</a>
        </div>
        
        <div class="box">
            <img src={tiendapanes} alt=""/>
            <h3>Don Torcuato</h3>
            <p>Ruta 202 al 200</p>
            <a href="https://goo.gl/maps/4Smc7SdEycz26D3T8" class="btn-us">Ir al mapa Mapa</a>
        </div>

        
        <div class="box">
            <img src={verdurass} alt=""/>
            <h3>General Pacheco</h3>
            <p>Av.Hipólito Yrigoyen </p>
            <a href="https://goo.gl/maps/yc2U4RcgwSeugvBN7" class="btn-us">Ir al mapa Mapa</a>
        </div>

        

    </div>


</section>


        </>
    );
}