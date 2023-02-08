import React from "react"
import { Link } from "react-router-dom"

const Menu = () =>{
    return(
        <>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/1"}>Classic Pastas</Link></li>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/2"}>Tour of Italy</Link></li>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/3"}>Grilled Specialties</Link></li>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/4"}>Seafood Cuisine</Link></li>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/5"}>Kids Meals</Link></li>
        <li className="nav-item"><Link className="nav-link link-dark px-2" to={"/menu/6"}>Desserts</Link></li>
    </>
    )
   }

export default Menu