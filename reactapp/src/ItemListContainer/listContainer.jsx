import { useState, useEffect } from "react";
import { getCartas } from "../components/async";


const Saludar=(param)=>{
    const[cartas, setCartas] = useState([])
    useEffect( () => {
        getCartas().then(response=>{
            setCartas(response)
        })
    }, [])
    
    return(
        
        <div>
            <h1 className="item">{param.mensaje}</h1>

            <ul>
                {cartas.map(carta=> <li key={carta.id}>{carta.numero}{' '}{carta.palo}</li>)}
            </ul>
        </div>
        

    )
}

export default Saludar;