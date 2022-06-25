import { useState,useContext, useEfffect } from "react"
import CarContexto from "../../context/CarritoContext"

const CarritoWeb=()=>{
    const [carrito, setCarrito] = useState([])
    console.log(carrito)
    const {CarCantidad, CarTotal, Borrar} = useContext(CarContexto)
    const total=CarCantidad()
    const precio=CarTotal()
    

    
    

    return (
        <div>

            <h2 className="titulo"> Carrito</h2>

            <div>
                
                <h3 className="tituloFinal">cantidad: {total}</h3>
                <h3 className="tituloFinal">total: {precio}</h3>
                <button onClick={Borrar}>Quitar</button>

                <button>Comprar</button>
            </div>

        </div>
    )
}

export default CarritoWeb