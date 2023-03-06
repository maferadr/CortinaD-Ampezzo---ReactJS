import { useState } from "react";
import {toast} from 'react-toastify'

export const ItemCount = ({inicialValue, stock, onAdd}) =>{
    const [contador, setContador] = useState (inicialValue)

    const aumentar = () => (contador < stock) && setContador(contador + 1)
    const disminuir = () => (contador > inicialValue) && setContador(contador - 1)

    const addToCart = () => {
        onAdd(contador)
        toast.success(`Agregaste ${contador} productos al carrito`)
    }

    return (
        <div>
            <button className="btn btn-light" onClick={ () => aumentar()}>+</button>
                {contador}
            <button className="btn btn-light" onClick={ () => disminuir()}>-</button> 
            <button type="button" className="btn btn-success" onClick={ ()=> addToCart()}>Add to Cart</button>
        </div>
)
}