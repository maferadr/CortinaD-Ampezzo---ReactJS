import React from "react";

const ShoppingCart = () =>{
    return(
       <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-light">Meal Cart</button> 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">See Items</a></li>
            <li><a className="dropdown-item" href="#">Checkout</a></li>
          </ul>
        </li>
       </>

    )
}

export default ShoppingCart