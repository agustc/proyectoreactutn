
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
    <Footer/>
    </>
)

}