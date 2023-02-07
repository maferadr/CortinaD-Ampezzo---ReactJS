import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () =>{

    const [meals, setMeals] = useState([])
    const {id} = (useParams)

    useEffect(() =>{
        fetch('../json/meals.json')
        .then(response => response.json())
        .then(menu =>{
            const item = menu.find(men => men.id === parseInt(id))
            setMeals(item)
        })
    }, [])

return (
<>
    <main>
        <div className="card mb-3">
            <ItemDetail item={meals}/>
        </div>
    </main>
</>
)

}

