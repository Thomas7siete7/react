import { Link } from "react-router-dom";
import { useState, createContext} from "react";

export const loginContexto = createContext()

const Logear =()=>{
    const [email, setEmail]= useState('')
    const [direccion, setDireccion]= useState('')
    const [telefono, setTelefono]= useState('')

    console.log(email, direccion, telefono)

    const log=()=>{
        localStorage.setItem("email", email)
        localStorage.setItem("direccion", direccion)
        localStorage.setItem("telefono", telefono)
    }
    

    return (
        <div>

            <form>
                <h2>Registrarse</h2>
                <input type="text" placeholder="Correo" name="correo" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="text" placeholder="Direccion" name="direccion" value={direccion} onChange={(e)=> setDireccion(e.target.value)}></input>
                <input type="number" placeholder="Telefono" name="telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}></input>

                <Link to='/'>
                        <h3 onClick={log()}>Comprar</h3>
                </Link>

            </form>

        </div>
    )
}

export default Logear
