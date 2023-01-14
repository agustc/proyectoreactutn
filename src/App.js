import "./components/styles.css"
import Navbarr from "./components/navbar/Navbar";
import {Routes,Route} from "react-router-dom";
//import Rutas from "./components/navbar/Rutas";

import Home from "./components/pages/Home"
import Contacto from "./components/pages/Contacto";
import Nosotros from "./components/pages/Nosotros";
import Productos from "./components/pages/Productos";
import Sucursales from "./components/pages/Sucursales";
import Layout from "./components/pages/Layout";
import React from 'react';
import Rutas from "./components/navbar/Rutas";
import { Banner } from "./components/Banner/Banner";
 function App(){
  return(
    <div className="App">

 <Routes>
            
               <Route path="/" element={<Home/>}/>
                 <Route index element={<Layout />}/>
              <Route path ="Productos" element ={<Productos/>}/>
               <Route path ="Sucursales" element ={<Sucursales/>}/>
               <Route path ="Nosotros"  element={<Nosotros/>}/>
               <Route path ="Contacto" element={<Contacto/>}>

               </Route>


               </Routes>
   
  
    </div>
  
);
}

export default App;