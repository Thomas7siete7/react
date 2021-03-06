import { Link } from "react-router-dom";
import CarritoWidget from "./carrito";
import Logear from "./Item/login";

const NAvBar=()=>{
    return (
        <div>
            <header className="header">
                <nav className="flex ">
                    <Link to='/'>
                        <h3>Comprax</h3>
                    </Link>
                    <ul className="flex ul letras-nav">
                        <Link to='/tipo/remeras'  >Remeras</Link>
                        <Link to='/tipo/buzos'  >Buzos</Link>
                        <Link to='/tipo/pantalones'  >Pantalones</Link>
                        <Link to='/login/logear'>Login</Link>
                    </ul>

                    <CarritoWidget/>
                </nav>
            </header>
        </div>
    )
}

export default NAvBar;