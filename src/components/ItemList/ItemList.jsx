import { Item } from "../Item/Item"

export const ItemList = ({menu}) =>{
return (
    <>
        {menu.map(meal => <Item item={meal} key={meal.id}/>)}
    </>
)
}