
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import {Products} from "../Products/Products";
import {Testimonios} from "../Testimonios/Testimonio";
import { Sucu } from "../Sucu/Sucu";
import {Us} from "../US/Us";
import {Contact} from "../Contact/Contact";
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    <Banner/>
   <Products/>
   <Testimonios/>
   
<Sucu/>
<Us/>
<Contact/>
    <Footer/>
    </>
)

}