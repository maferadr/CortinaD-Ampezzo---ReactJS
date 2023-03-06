import React from "react"


export const Checkout = () =>{
return (
<div>
    <div className="productosCheck">
    <div className="col pt-4 pb-4" style={{width: "30%"}}>
            <div className="card mb-3 cardProducto shadow-sm">
            <img className="bd-placeholder-img card-img-top" 
            style={{height: 350}}
            src={`../img/pasta-bolognese.jpg`}></img>
            {/* <div className="card-body">
                <h3 className="cardTitle">{item.nombre}</h3>
                <p className="card-text">{item.menuType}</p>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button type="button" className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>See details</Link></button>
            </div> */}
            </div>
        </div>
    </div>
        

        <form className="formulario border-top pt-4 mb-3 text-center">
  <img className="cart-icon mb-4" src={`https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/cart-icon.png?alt=media&token=48ae3f95-85a0-4481-af1c-2a3c66ad86cd`} alt="" width={72} height={57}
  />
  <h1 className="h3 mb-3 fw-normal">CheckOut Form</h1>
  <div className="form-floating">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Confirm Email Address</label>
  </div>
  <div className="form-floating">
    <input type="text" className="form-control" id="floatingInput" placeholder="First Name"
    />
    <label htmlFor="floatingInput">First Name</label>
  </div>
  <div className="form-floating">
    <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"
    />
    <label htmlFor="floatingInput">Last Name</label>
  </div>
  <div className="form-floating">
    <input type="tel" className="form-control" id="floatingInput" placeholder="(000)-000-0000"
    />
    <label htmlFor="floatingInput">Phone Number</label>
  </div>
  
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" defaultValue="remember-me" /> Remember me
    </label>
  </div>
  <button className="w-100 btn btn-lg btn-success" type="submit">
    Check Out
  </button>
</form>


</div>
)
}