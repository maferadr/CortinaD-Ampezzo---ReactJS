import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

export const ItemList = ({menu, plantilla}) =>{
return (
    <>
    {
        plantilla === 'item'
        ?
        menu.map(meal => <Item item={meal} key={meal.id}/>)
        :
        menu.map(meal => <ItemCart item={meal} key={meal.id}/>)
    }
    </>
)
}