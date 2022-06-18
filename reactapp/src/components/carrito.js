import { useContext } from "react";
import CarContexto from "../context/CarritoContext";

const CarritoWidget=()=>{
    const {CarCantidad} = useContext(CarContexto)
    const total=CarCantidad()
    console.log(total)
    return (
        <div>
            <h1>
            carrito: {total}
            </h1>
        </div>
    )
}

export default CarritoWidget
