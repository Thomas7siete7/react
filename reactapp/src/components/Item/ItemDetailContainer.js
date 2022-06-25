import { useState, useEffect  } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc , doc} from "firebase/firestore";
import { db } from "../../servicios/firebase";

const ItemDetailContainer=()=>{
    const[productos, setproductos] = useState()
    const [loading, setLoading]=useState(true)

    const {idCart}= useParams()

    useEffect(()=>{

        const docRef= doc(db, 'productos', idCart)
        getDoc(docRef).then(doc=>{
            const productoss={id: doc.id, ...doc.data()}
            setproductos(productoss)
        }).catch(error=>{console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [idCart])

    if(loading){
        return <h1>Cargando...</h1>
    }

    return(
        <>
            <ItemDetail {...productos} />
        </>
    )
}

export default ItemDetailContainer;