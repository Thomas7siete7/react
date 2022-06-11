import Item from "../Item/Item";


const ItemList=({carta})=>{
    return(
        <ul className="orden" >
            {carta.map(carta=> <Item key={carta.id} {...carta} />)}

        </ul>
    )
}

export default ItemList;