
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import {Products} from "../Products/Products";
import {Testimonios} from "../Testimonios/Testimonio";
import { Sucu } from "../Sucur/sucu";
import {Us} from "../US/Us";
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    <Banner/>
   <Products/>
   <Testimonios/>
   <Us/>
<Sucu/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
    </>
)

}