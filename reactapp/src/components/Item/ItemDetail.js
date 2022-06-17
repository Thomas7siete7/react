import Contar from "../contador"

const ItemDetail=({anime, marca, precio, tipo, carrito, setCarrito})=>{
    
    const handleAdd = (cantidad)=>{
        setCarrito([...carrito, {anime, marca, precio, tipo, cantidad}])
      }

    return(

        
        <div className="mover flex alinear">
            <div className="card">
                <h2>Detalles del producto</h2>
                <h3>Marca: {marca}</h3>
                <h4>anime: {anime}</h4>

                <h4>Precio: ${precio}</h4>
                
                <Contar onAdd={(handleAdd)} ></Contar>

            </div>
        </div>
    )
}

export default ItemDetail