import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
//import MenuItems from "./MenuItems"
import Home from "../pages/Home";
import Productos from "../pages/Productos"
import Sucursales from "../pages/Sucursales"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto";
import Navbar from "./Navbar";
import Layout from "../pages/Layout";

const Rutas= () => {
    return ( 
    
        
        <Routes>
               
                  <Route path="/" element={<Layout />}/>
                    <Route index element={<Home/>}/>
                 <Route path ="Productos" element ={<Productos/>}/>
                  <Route path ="Sucursales" element ={<Sucursales/>}/>
                  <Route path ="Nosotros"  element={<Nosotros/>}/>
                  <Route path ="Contacto" element={<Contacto/>}>

                  </Route>


                  </Routes>
      
            
     );
}
 
export default Rutas ;