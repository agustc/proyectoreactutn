import React,{useState} from "react";
import Plane from "../assets/plane.png";
import {ProductsData} from "../data/dataproducts"
import "../Products/products.css"
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Products = () =>{

    const [parent]=useAutoAnimate()
    const [MenuProducts, setMenuProducts]=useState(ProductsData);
    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product)=>product.type==type))
    }
    return(
        <div className="container">
            <img className="imagen" src={Plane} alt="" />
            <h1>Nuestros Productos</h1>

            <div className="productss">
                <ul className="menu">
                    <li onClick={()=>setMenuProducts(ProductsData)}>Todo</li>
                    <li onClick={()=>filter("Alacena")}>Almacen</li>
                    <li onClick={()=>filter("Refrigerado")}>Refrigerado</li>
                    <li onClick={()=>filter("Cosmetica")}>Cosmetica</li>
                </ul>
                <div className="list" ref={parent}>
                    
                   {MenuProducts.map((product,i)=> (
                        <div className="product">
                            <div className="derecha-s">
                            <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                            </div>
                            <span>{product.price}$</span>
                           
                            </div>
                            <img src={product.img} alt="" className="img-p"/>
                        </div>
                    ))
}
                </div>
            </div>
        </div>
    )
}