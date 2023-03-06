import React from "react"
import { useCarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import { createOrdenDeCompra, getOrdenCompra, getProducto, updateProducto} from "../../Firebase/firebase"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"


export const Checkout = () =>{
  const {carrito, emptyCart, totalPrice} = useCarritoContext()
  const datosFormulario = React.useRef()
  let navigate = useNavigate()

  const consultarShoppingCart = (e) =>{
    e.preventDefault()
    const datForm = new FormData(datosFormulario.current)
    const cliente = Object.fromEntries(datForm)

    const aux = [...carrito]

    aux.forEach(mealCarrito =>{
      getProducto(mealCarrito.id).then(mealDB =>{
        mealDB.stock -= mealCarrito.cant
        updateProducto(mealCarrito.id, mealDB)
      })
    })

    createOrdenDeCompra(aux, cliente, totalPrice(), new Date().toISOString()).then(ordenCompra=>{

    toast.success(`Your Payment has been submitted! Get your tracking number: ${ordenCompra.id} for updates`)
    emptyCart()
    e.target.reset()
    navigate("/")
  })
  }

  datosFormulario.length === 0 && toast.error(`This field is required`)
  


return (
<>

  {carrito.length === 0 
  ?
  <>
          <div className="cover-container" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/chef.webp?alt=media&token=338c2d87-53fb-442b-b7b8-2505647033f8)'}}>
            <h2 className="cover-cart">Your bag is Empty</h2>
            <Link className="button-cart nav-link" to={"/"}><button className="btn btn-success">Continue Shopping</button></Link>
        </div>
  </>
  :
  <>
      
        <form onSubmit={consultarShoppingCart} ref={datosFormulario} className="productosCheck formulario border-top pt-4 mb-3 text-center">
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

  </>

  }
    

</>
)
}