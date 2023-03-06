import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    //Is in Cart
    const isInCart = (id) =>{
        return carrito.find(meal => meal.id === id)
    }

    //Add items
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(meal => meal.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else { 
            const prodCart ={
                ...producto, 
                cant: cantidad
            }
            /*
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
            */
            setCarrito([...carrito, prodCart])

        }
    }

    // Delete items
    const removeItem = (id) =>{
        setCarrito(carrito.filter(meal => meal.id !== id))
    }

    //Total Quantity 
    const getItemQuantity = () =>{
        return carrito.reduce((acum, meal) => acum += meal.cant, 0)
    }

    // Purchase: (precio total de la compra)
    const totalPrice = () =>{
        return carrito.reduce((acum, meal) => acum += (meal.cant * meal.precio))
    }

    // Empty Cart
    const emptyCart = () =>{
        setCarrito([])
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
                {props.children}
        </CarritoContext.Provider>
    )
}

//Remember go to ItemDetail to figure out the Item Cant and to ItemCount and Shopping Cart(toggle)