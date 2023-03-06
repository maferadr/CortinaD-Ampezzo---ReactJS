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
    const addItem = (menu, cantidad) => {
        if(isInCart(menu.id)) {
            const indice = carrito.findIndex(meal => meal.id === menu.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else { 
            const prodCart ={
                ...menu, 
                cant: cantidad
            }
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
        return carrito.reduce((acum, meal) => acum += (meal.cant * meal.precio), 0)
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