import Item from "../Item/Item";


const ItemList=({producto})=>{
    return(
        <ul className="orden" >
            {producto.map(producto=> <Item key={producto.id} {...producto} />)}

        </ul>
    )
}

export default ItemList;