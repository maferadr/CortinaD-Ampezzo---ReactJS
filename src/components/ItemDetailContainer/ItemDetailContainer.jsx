import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

import { getProducto } from "../../Firebase/firebase"

export const ItemDetailContainer = () =>{

    const [meals, setMeals] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        getProducto(id)
        .then(each =>{
            setMeals(each)
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

