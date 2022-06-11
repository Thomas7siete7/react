
const ItemDetail=({palo, marca, precio})=>{

    

    return(
        <div className="mover flex">
            <div className="card">
                <h2>Detalles del producto</h2>
                <h3>Marca: {marca}</h3>
                <h4>Palo: {palo}</h4>
                <h4>Precio: ${precio}</h4>
                
            </div>
        </div>
    )
}

export default ItemDetail