import React from 'react'
import Menu from "./Menu/Menu"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

const Navbar = () =>{
  return (
    <>
        <header className="p-3 text-bg-dark">
          <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
       <Menu/>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <ShoppingCart/>
    </div>
  </div>
</header>

    </>
   
  )  
}



export default Navbar