import { Link } from "react-router-dom"

export const Item = ({item}) =>{
return (
    <>
        <div className="col">
            <div className="card mb-3 cardProducto shadow-sm">
            <img className="bd-placeholder-img card-img-top" 
            style={{ width: "100%", height: 350}}
            src={`../img/${item.img}`}></img>
            <div className="card-body">
                <h3 className="cardTitle">{item.nombre}</h3>
                <p className="card-text">{item.menuType}</p>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button type="button" className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>See details</Link></button>
            </div>
            </div>
        </div>
        
    </>
)
}