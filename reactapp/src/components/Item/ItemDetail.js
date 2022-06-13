import Contar from "../contador"

const ItemDetail=({anime, marca, precio})=>{
    
    console.log(anime, marca, precio)
    const handleAdd = ()=>{
        console.log('se ejecutó')
      }

    return(

        
        <div className="mover flex alinear">
            <div className="card">
                <h2>Detalles del producto</h2>
                <h3>Marca: {marca}</h3>
                <h4>anime: {anime}</h4>
                <h4>Precio: ${precio}</h4>
                
                <Contar></Contar>

            </div>
        </div>
    )
}

export default ItemDetail