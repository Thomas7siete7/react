import { useContext } from "react";
import { Link } from "react-router-dom";
import CarContexto from "../context/CarritoContext";

const CarritoWidget=()=>{
    const {CarCantidad} = useContext(CarContexto)
    const total=CarCantidad()
    console.log(total)
    return (
        <div>
            <Link to="lista/carrito">
                <h1>
                    carrito: {total}
                </h1>
            </Link>
            
        </div>
    )
}

export default CarritoWidget
