
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
export default function Layout (){
return(
    <>
    <Navbar/>
    <Outlet/>
    
<Banner/>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
    <Footer/>
    </>
)

}