
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import {Products} from "../Products/Products"
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    
<Banner/>
     <Products/>
    <Footer/>
    </>
)

}