import "./Banner.css"
import licuadoarandanos  from "../assets/licuadoarandanos.png";
export const Banner=()=>{
    return(
     <>
     {/* <div className="banner">
        <div className="texto">
      <h2>Come rico a base de plantas<br>con</br></h2>
      <p>Descubri el poder de las plantas</p>
      <a href="/">Lee más</a>
     </div> 
    <div className="banner_img"> */}
<div className="banner_img">
      <img src={licuadoarandanos} alt=""/>
    
    </div>
    </>
    )

}