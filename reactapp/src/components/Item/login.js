import { Link } from "react-router-dom";
import { useState } from "react";

const Logear =()=>{
    const [nombre, setNombre]= useState('')
    const [contraseña, setContraseña]= useState('')
    const [direccion, setDireccion]= useState('')
    const [telefono, setTelefono]= useState('')


    return (
        <div>

            <form>
                <h2>Registrarse</h2>
                <input type="text" placeholder="Correo" name="correo" value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
                <input type="password" placeholder="Contraseña" name="contraseña" value={contraseña} onChange={(e)=> setContraseña(e.target.value)}></input>
                <input type="text" placeholder="Direccion" name="direccion" value={direccion} onChange={(e)=> setDireccion(e.target.value)}></input>
                <input type="number" placeholder="Telefono" name="telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}></input>

                <Link to='/'>
                        <h3>Comprar</h3>
                </Link>

            </form>

        </div>
    )
}

export default Logear
