import { useState } from "react";

const Contar=({onAdd})=>{
    
    //const [inicial, setInicial]= useState (prop.initial)
    const [count, setContar]= useState(0)

    const restar=()=>{
        setContar(prev=> prev-1)
    }

    const sumar=()=>{
        setContar(prev=> prev+1)
    }

    return(
        <div>
           <button onClick={restar}>-</button>
            <h1>{count}</h1>
            <button onClick={sumar} >+</button> 
            <button onClick={() => onAdd()}>agregar carrito</button>
        </div>
            
    );
}

export default Contar;