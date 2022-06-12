import { useState, useEffect } from "react";
import { getCartas } from "../components/async";
import ItemList from "../components/ItemList/ItemList";


const Saludar=(param)=>{
    const[cartas, setCartas] = useState([])
    useEffect( () => {
        getCartas().then(response=>{
            setCartas(response)
            console.log(cartas, response)
        })
    }, [])
    

    return(
        
        <div>
            <h1 className="item">{param.mensaje}</h1>
            <ItemList carta={cartas}></ItemList>
            
        </div>
        

    )
}

export default Saludar;