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
        <div className="cover-container" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/chef.webp?alt=media&token=338c2d87-53fb-442b-b7b8-2505647033f8)'}}>
            <h2 className="cover-cart">Your bag is Empty</h2>
            <Link className="button-cart nav-link" to={"/"}><button className="btn btn-success">Continue Shopping</button></Link>
        </div>
        
    </>
    :
    <>
            <div className="bg-menu pt-3" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/bg-cart.png?alt=media&token=d28661ab-4154-4473-b895-42c2133d6927)', height: 150}}></div>

            <div className="album">
                <div className="container">
                <div className="row cardProducto row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                <ItemList menu={carrito} plantilla={'itemCart'}/>
                }
                </div>
                </div>
            </div>
        <div className="divButtons rounded">
                <p>Purchase: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <Link className="nav-link" to={"/"}><button className="btn btn-light">Continue Shopping</button></Link>
                <Link className="nav-link" to={"/Checkout"}><button className="btn btn-success">Checkout</button></Link>
                <button className="btn btn-danger" onClick={()=> emptyCart()}>Empty cart</button>
        </div>
    </>

}


</>
)
}