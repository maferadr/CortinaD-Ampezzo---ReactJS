import { useCarritoContext } from "../../Context/CarritoContext"

export const ItemCart = ({item}) =>{
    const {removeItem} = useCarritoContext()
return (
<div>
        <div className="col pt-4">
            <div className="card mb-3 cardProducto shadow-sm">
            <img className="bd-placeholder-img card-img-top" 
            style={{ width: "100%", height: 350}}
            src={item.img}></img>
            <div className="card-body">
                <h3 className="cardTitle">{item.nombre}</h3>
                <p>Cantidad: {item.cant}</p>
                <p>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p>Subtotal: ${new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
            </div>
            </div>
        </div>

</div>
)
}