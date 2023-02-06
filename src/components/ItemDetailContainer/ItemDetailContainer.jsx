import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () =>{

    const [meals, setMeals] = useState([])
    useEffect(() =>{
        fetch('./json/meals.json')
        .then(response => response.json())
        .then(menu =>{
            const item = menu.find(each => each.id === 1)
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

