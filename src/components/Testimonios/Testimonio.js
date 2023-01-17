import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bowll from "../assets/bowl.jpg";
import ara from "../assets/ara.jpg";
import pomelo from "../assets/pomelos.jpg"
import img5 from "../assets/img5.jpg"
import palta from "../assets/palta.jpg"
import cerezas from  "../assets/cerezas.jpg"
import frutilla from  "../assets/frutilla.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonio.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Testimonios = () => {
    return (
        <>
        <div className="titulo-tes"><h1>Testimonios</h1></div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
           
            <SwiperSlide>
             <div className="contenedor-tes"> <img className="imagen-test1" src={pomelo} />
             </div>
             <div className="nombre"><h3>Sebastian</h3></div>
             <br></br>
             <div className="texto-test"><p>Muy buen lugar para comprar productos y comida natural. La atención es muy buena y te asesoran muy bien. La comida que preparan es muy rica, además sana.</p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>
             </div>
              

            </SwiperSlide>
            <SwiperSlide>
            <div className="contenedor-tes"> <img className="imagen-test2" src={img5} />
             </div>
             <div className="nombre"><h3>Michael</h3></div>
             <br></br>
             <div className="texto-test"><p>Tiene opciones para celiacos, vegetarianos, veganos, me salvo,  </p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>
             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="contenedor-tes"> <img className="imagen-test" src={cerezas} />
             </div>
             <div className="nombre"><h3>Almendra</h3></div>
             <br></br>
             <div className="texto-test"><p>El local tiene muy buenos precios, hay promos que te vuelan la cabeza</p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>
             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="contenedor-tes"> <img className="imagen-test" src={frutilla} />
             </div>
             <div className="nombre"><h3>Aurora</h3></div>
             <br></br>
             <div className="texto-test"><p>Hermosa la variedad de productos,el local es bellisimo</p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i> 
             </div>
                         </SwiperSlide>
            <SwiperSlide>
            <div className="contenedor-tes"> <img className="imagen-test" src={ara} />
             </div>
             <div className="nombre"><h3>Paulina</h3></div>
             <br></br>
             <div className="texto-test"><p>En el local hay un gatito! Voy a ir mas seguido</p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>
             
             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="contenedor-tes"> <img className="imagen-test" src={palta} />
             </div>
             <div className="nombre"><h3>Rama</h3></div>
             <br></br>
             <div className="texto-test"><p>Las chicas que atendian eran muy amables, me ayudaron en mis compras.</p></div>
             <br></br>
             <div className="corazones">
             <i class="fa-solid fa-heart"></i> <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>  <i class="fa-solid fa-heart"></i>
             </div>
            </SwiperSlide>
           
           
            
          </Swiper>
          
        </>
      );
    }
    