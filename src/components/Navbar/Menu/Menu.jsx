import React from "react"
import { Link } from "react-router-dom"

const Menu = React.memo(() =>{
    return(
        <>
        <li className="nav-item"><Link className="nav-link px-2 text-secondary" to={"/"}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/1"}>Classic Pastas</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/2"}>Tour of Italy</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/3"}>Grilled Specialties</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/4"}>Seafood</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/5"}>Kids Meals</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 text-white" to={"/menu/6"}>Desserts</Link></li>
    </>
    )
   })

export default Menu