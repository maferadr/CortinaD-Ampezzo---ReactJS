import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { useCarritoContext } from "../../Context/CarritoContext";

export const Cart = () =>{
const {carrito, emptyCart, totalPrice} = useCarritoContext()

return (
<>
    { 
    carrito.length === 0 
    ?
    <>
        <h2 className="carrito-title">Your bag is Empty</h2>
        <Link className="nav-link" to={"/"}><button className="btn btn-success">Continue Shopping</button></Link>
    </>
    :
    <>
        <div className="carritoContainer">
            {
                <ItemList menu={carrito} plantilla={'itemCart'}/>
            }
        </div>
        <div className="divButtons rounded">
                <p>Purchase: </p>
                <Link className="nav-link" to={"/"}><button className="btn btn-light">Continue Shopping</button></Link>
                <Link className="nav-link" to={"/Checkout"}><button className="btn btn-success">Checkout</button></Link>
                <button className="btn btn-danger" onClick={()=> "Borrar Producto"}>Empty cart</button>
        </div>
    </>

}


</>
)
}