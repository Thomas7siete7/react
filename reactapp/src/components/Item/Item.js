import {Link} from 'react-router-dom'

const Item=({id, palo, imagen, precio})=>{
    return(

        
        <li key={id} className="mover flex" >
            <img src={imagen} alt={palo} className="fotos"></img>
            <h2 className="titulo">{palo}</h2>
            <h3 className="precio"> precio: ${precio} </h3>

            <footer>
                <Link to={`/detalle/${id}`}>Ver Detalle</Link> 
            </footer>
        </li>
    )
}

export default Item