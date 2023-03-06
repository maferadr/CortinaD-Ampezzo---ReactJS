import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";


const ShoppingCart = () =>{
  const {getItemQuantity} = useCarritoContext()
    return(
       <div className="text-end">
        <Link className="nav-link" to={'/Cart'}>
        <button className="btn btn-warning">
          Cart
          {getItemQuantity() > 0 && <span className="cantCarrito badge text-bg-secondary">{getItemQuantity()}</span>}
        </button>
        </Link>
      </div>
    )
}

export default ShoppingCart