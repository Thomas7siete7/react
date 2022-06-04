const Item=({carta})=>{
    return(
     <li key={carta.id}>{carta.numero}{' '}{carta.palo}</li>
    )
}

export default Item