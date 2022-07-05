import { Link } from "react-router-dom";

const Logear =()=>{

    const info=()=>{
        const informacion={

        }
    }

    const capturar

    return (
        <div>

            <form>
                <h2>Registrarse</h2>
                <input type="text" placeholder="Correo" name="correo"></input>
                <input type="password" placeholder="Contraseña" name="contraseña"></input>
                <input type="text" placeholder="Direccion" name="direccion"></input>
                <input type="number" placeholder="Telefono" name="telefono"></input>

                <Link to='/'>
                        <h3>Comprar</h3>
                </Link>

            </form>

        </div>
    )
}

export default Logear
