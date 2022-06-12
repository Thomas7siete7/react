import App from "../App";
import { Link } from "react-router-dom";

const NAvBar=()=>{
    return (
        <div>
            <header className="header">
                <nav className="flex ">
                    <Link to='/'>
                        <h3>Comprax</h3>
                    </Link>
                    <ul className="flex ul letras-nav">
                        <li className="container-menu"><a href="#" className="letras-nav ">Perfil</a>
                            <ul className="subMenu">
                                <li className="item">Ver</li>
                                <li className="item">Cambiar</li>
                            </ul>
                        </li>
                        <li className="container-menu"><a href="#" className="letras-nav">Ofertas</a>
                            <ul className="subMenu">
                                <li>Muebles</li>
                                <li>Electrodomesticos</li>
                            </ul>
                        </li>

                        <li><a href="#" className="letras-nav">Carrito</a></li>

                        <li><a href="#" className="letras-nav">Configuracion</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NAvBar;