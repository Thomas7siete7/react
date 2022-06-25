import Contar from "../contador"
import { useContext } from "react"
import { Contexto } from "../../App"
import CarContexto from "../../context/CarritoContext"
import NotificacionContext from "../notificacion/Notificacion"

const ItemDetail=({id, anime, marca, precio, tipo})=>{
    
    const {agProd} = useContext(CarContexto)

    const setNotificacion=useContext(NotificacionContext)

    const handleAdd = (cantidad)=>{
        setNotificacion('i', `se agregaron ${cantidad} ${tipo}`)
        agProd([{id, anime, marca, precio, tipo, cantidad}])
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