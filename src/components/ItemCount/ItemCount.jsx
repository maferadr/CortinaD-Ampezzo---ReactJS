import { useState } from "react";

export const ItemCount = ({inicialValue, stock}) =>{
    const [contador, setContador] = useState (inicialValue)

    const aumentar = () => (contador < stock) && setContador(contador + 1)
    const disminuir = () => (contador > inicialValue) && setContador(contador - 1)

    return (
        <div>
            <button className="btn btn-light" onClick={ () => aumentar()}>+</button>
                {contador}
            <button className="btn btn-light" onClick={ () => disminuir()}>-</button>            
        </div>
)
}