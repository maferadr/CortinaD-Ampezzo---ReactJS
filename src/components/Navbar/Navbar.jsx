import React from 'react'
import Menu from "./Menu/Menu"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

const Navbar = () =>{
  return (
    <>
        <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap justify-content-center" style={{borderBottomStyle : "solid", borderBottomWidth: "1px", borderColor: "rgba(0, 0, 0, 0.47)"}}>
          <ul className="nav me-auto justify-content-center">
            <Menu/>
          </ul>
          <ul className="nav justifiy-content-center">
            <ShoppingCart/>
          </ul>
        </div>
        <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
          <span className="fs-4">Cortina D'Ampezzo</span>
        </a>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>
      </div>
    </header>
      </nav>
    </>
   
  )  
}



export default Navbar