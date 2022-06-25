import { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../servicios/firebase";



const Saludar=(param)=>{
    const[productos, setproductos] = useState([])
    const [carga, setCarga]= useState(true)
    const {tipoId}= useParams()
    

    useEffect( () => {
        setCarga(true)
        const collecion= (tipoId) ? (
            query(collection(db, 'productos'),where ('tipo', '==', tipoId))
        ):(collection(db, 'productos'))

        getDocs(collecion).then(resp=>{
            const prodRef=resp.docs.map(doc=>{
                return {id:doc.id, ...doc.data()}
            })
            setproductos(prodRef)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setCarga(false)
        })
    
        
    },[tipoId])

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