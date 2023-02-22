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
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2 dropdown-toggle" data-bs-toggle="dropdown">
        <ShoppingCart/>
          Cart 
           <span class="badge text-bg-secondary">4</span>
        </button>
        <ShoppingCart/>
      </div>
    </div>
  </div>
</header>

    </>
   
  )  
}



export default Navbar