
// import "./Us.css";
// import organic from "../assets/organic.jpg";
// export const Us =()=>{
//     return(

//         <section className="about-us" id="about-us">

// <h1 className="heading-us"> <span>Nosotros</span>!</h1>

// <div className="row-us">

//     <div className="img-us">
//         <img src={organic} alt=""/>
//     </div>

//     <div className="cont-us">
//         <h3>¿Quienes somos?</h3>
//         <p> es un mercado saludable, consciente y sustentable. Trabajamos comprometidos en seleccionar y acercarte alimentos naturales y gourmet con ingredientes reales y nobles.

// ¡Amamos lo sano, rico y natural! En nuestra tienda vas a poder encontrar frutos secos, legumbres, semillas, cereales, productos veganos, vegetarianos, orgánicos, sin lactosa, sin TACC, sin azúcar, cosmética natural, vegana y cruelty free y más de mil productos para todos los estilos de vida.

// </p>
// <a href="#" className="btn">Leer mas</a>
//     </div>
// </div>
//         </section>
//     );
// }

import React from 'react'
import "./Us.css"; 
 import organic from "../assets/organic.jpg";
 export const Us =()=>{
    return (
       
       <section className="bakery" id="bakery">

         <h2 className="heading">Nosotros!</h2>
           
           

          <div className="row">


          <div className="image">
                <img  src={organic} ></img>
                </div>

            <div className="content">

            <p> Somos un mercado saludable, consciente y sustentable. Trabajamos comprometidos en seleccionar y acercarte alimentos naturales y gourmet con ingredientes reales y nobles.
</p>
<p>
¡Amamos lo sano, rico y natural! En nuestra tienda vas a poder encontrar frutos secos, legumbres, semillas, cereales, productos veganos, vegetarianos, orgánicos, sin lactosa, sin TACC, sin azúcar, cosmética natural, vegana y cruelty free y más de mil productos para todos los estilos de vida.

 </p>
 <br></br>
         
            <div class="wrapper">
    <a class="btn-us" href="#">Descubrenos</a>
</div>
            </div>

            </div>
            

           

        </section>
    )
}
