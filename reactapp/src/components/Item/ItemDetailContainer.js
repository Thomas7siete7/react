import { useState, useEffect  } from "react";
import { getproductosBy } from "../async";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const[productos, setproductos] = useState()
    const {idCart}= useParams()

    useEffect(()=>{
        getproductosBy(Number(idCart)).then(response=>{
            setproductos(response)
            
        })
    }, [])
    console.log(idCart)
    return(
        <>
            <ItemDetail {...productos}/>
        </>
    )
}

export default ItemDetailContainer;