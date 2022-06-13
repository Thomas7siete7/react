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
                        <Link to='/tipo/remeras'  >Remeras</Link>
                        <Link to='/tipo/buzos'  >Buzos</Link>
                        <Link to='/tipo/pantalones'  >Pantalones</Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NAvBar;