import { useState, useEffect } from "react";
import { getproductos, getproductosByTipo } from "../components/async";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";


const Saludar=(param)=>{
    const[productos, setproductos] = useState([])
    const [carga, setCarga]= useState(true)
    const {tipoId}= useParams()
    

    useEffect( () => {

        setCarga(true)

        if(!tipoId){
            getproductos().then(response=>{
                setproductos(response)
            }).catch(error=>{
                console.log(error)
            }).finally(()=>{
                setCarga(false)
            })
        }else{
            getproductosByTipo(tipoId).then(response=>{
                setproductos(response)
                console.log(tipoId)
            }).catch(error=>{
                console.log(error)
            }).finally(()=>{
                setCarga(false)
            })
        }
        
    }, [tipoId])
    
    if(carga){
        return <h1>Cargando...</h1>
    }

    return(
        
        <div>
            <h1 className="item">{param.mensaje}</h1>
            <ItemList producto={productos}></ItemList>
            
        </div>
        

    )
}

export default Saludar;