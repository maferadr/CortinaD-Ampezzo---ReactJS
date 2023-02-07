import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () =>{
    const [meals, setMeals] = useState([])
    const {idCategoria}=(useParams)

    useEffect(() =>{
        if (idCategoria){
            fetch('../json/meals.json')
            .then(response => response.json())
            .then(items =>{
                const menu = items.filter(men => men.idCategoria === parseInt(idCategoria))
                const menuList = ItemList({menu})
                console.log(menuList)
                setMeals(menuList)
        })
        }else{
            fetch('./json/meals.json')
        .then(response => response.json())
        .then(menu =>{
            console.log(menu)
            const menuList = ItemList({menu})
            console.log(menuList)
            setMeals(menuList)
        })
        }
        
    }, [idCategoria])

return (
<>
    <main>
    <div className="album bg-light">
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