
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import {Products} from "../Products/Products";
import {Testimonios} from "../Testimonios/Testimonio"
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    <Banner/>
   <Products/>
   <Testimonios/>
   <br></br><br></br>
    <Footer/>
    </>
)

}