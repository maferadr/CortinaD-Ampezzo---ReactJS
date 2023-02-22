import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) =>{
return (
<div>
<div className="pt-4 row mb-2">
  <div className="col-detail col-md-6">
    <div className="row border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <img className="col-auto d-none d-lg-block" 
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        src={`../img/${item.img}`}></img>
     
    </div>
  </div>
  <div className="col-detail col-md-6">
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-success">{item.menuType}</strong>
        <h3 className="mb-0">{item.nombre}</h3>
        <div className="mb-1 text-muted">${new Intl.NumberFormat('de-DE').format(item.precio)}</div>
        <p className="mb-auto">{item.ingredients}</p>
        <ItemCount inicialValue={1} stock={item.stock}/>
        <button type="button" className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  </div>
</div>


</div>
)
}