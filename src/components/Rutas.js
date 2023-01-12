import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
//import { Route, Router, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Nosotros from "./routes/Nosotros";
import Productos from "./routes/Productos";
import Sucursales from "./routes/Sucursales";
import Contacto from "./routes/Contacto";
import Navbarr from "./navbar/Navbar"

const Rutas = () => {
  return (
    
<Router>
 
      <Routes>


        <Route path ="/Home" element = {<Home/>}/>
        <Route path ="/Contacto" element={<Contacto/>}/>
        <Route path ="/Nosotros" element={<Nosotros/>}/>
        <Route path ="/Productos" element={<Productos/>}/>
        <Route path ="/Sucursales" element={<Sucursales/>}/>

        </Routes>
      </Router>
  );
}
export default Rutas ;