
import {useContext } from "react"
import CarContexto from "../../context/CarritoContext"
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../servicios/firebase/index'



const CarritoWeb=()=>{
    const {carrito, CarCantidad, CarTotal, Borrar} = useContext(CarContexto)

    const carr= JSON.stringify(carrito)
    const total=CarCantidad()
    const precio=CarTotal()
    

    const Comprar=()=>{
        console.log('comprado pápu')

        const orden={
            comprador:{
                email: localStorage.getItem("email"),
                telefono: localStorage.getItem("telefono"),
                direccion: localStorage.getItem("direccion")
            },
            prod: carr,
            total: precio
        }
        console.log(orden)
        const baseDatos= collection(db, 'ordenes')
        addDoc(baseDatos, orden).then(({id})=>{
            console.log(id)
        })
    }
    
    

    return (
        <div>

            <h2 className="titulo"> Carrito</h2>

            <div>
                
                <h3 className="tituloFinal">cantidad: {total}</h3>
                <h3 className="tituloFinal">total: {precio}</h3>
                <button onClick={Borrar}>Quitar</button>

                <button onClick={Comprar}>Comprar</button>
            </div>

        </div>
    )
}

export default CarritoWeb