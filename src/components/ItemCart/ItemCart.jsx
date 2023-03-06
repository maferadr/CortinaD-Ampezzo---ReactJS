import { useCarritoContext } from "../../Context/CarritoContext"

export const ItemCart = ({item}) =>{
return (
<div>
        <div className="bg-menu pt-3" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/bg-cart.png?alt=media&token=d28661ab-4154-4473-b895-42c2133d6927)', height: 150}}></div>
        <div className="itemCart col pt-4">
            <div className="card mb-3 cardProducto shadow-sm">
            <img className="bd-placeholder-img card-img-top" 
            style={{ width: "100%", height: 350}}
            src={item.img}></img>
            <div className="card-body">
                <h3 className="cardTitle">{item.nombre}</h3>
                <p className="card-text">Cantidad: {item.cant}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
            </div>
            </div>
        </div>

</div>
)
}