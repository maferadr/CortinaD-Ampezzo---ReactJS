import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { Header } from "../Item/Header"

import { getProductos } from "../../Firebase/firebase"

export const ItemListContainer = () =>{
    const [meals, setMeals] = useState([])
    const [title, setTitle] = useState("Todos los platos")
    const {idCategoria}= useParams()

    useEffect(() =>{
        if (idCategoria){
            getProductos()
            .then(items =>{
                const menu = items.filter(men => men.idCategoria === parseInt(idCategoria))
                const menuList = <ItemList menu={menu} plantilla={'item'}/>
                setMeals(menuList)
                setTitle(menu[0].menuType)
        })
        }else{
            getProductos()
            .then(menu =>{
            const menuList = <ItemList menu={menu} plantilla={'item'}/>
            setMeals(menuList)
        })
        }
        
    }, [idCategoria])

return (
<>
    <main>
    <header>
       <Header menu={title}/>
    </header>
    
   
    <div className="album">
        <div className="container">
        <div className="row cardProducto row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {meals}
        </div>
        </div>
    </div>
        

    </main>
</>
)
}
