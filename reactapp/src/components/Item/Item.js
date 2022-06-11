
const Item=({id, palo, imagen, precio})=>{
    return(

        
        <li key={id} >
            <img src={imagen} alt={palo} className="fotos"></img>
            <h2 className="titulo">{palo}</h2>
            <h3 className="precio"> precio: ${precio} </h3>
        </li>
    )
}

export default Item