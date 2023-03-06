import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";


const ShoppingCart = () =>{
  const {getItemQuantity} = useCarritoContext()
    return(
       <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2 dropdown-toggle" data-bs-toggle="dropdown">
         <ul className="dropdown-menu">
            <Link className="nav-link" to={'/Cart'}><li className="dropdown-item">See Items</li></Link>
            <Link className="nav-link" to={'/Checkout'}><li className="dropdown-item">Checkout</li></Link>
          </ul>
          Cart
          {getItemQuantity() > 0 && <span className="cantCarrito badge text-bg-secondary">{getItemQuantity()}</span>}
        </button>
      </div>
    )
}

export default ShoppingCart