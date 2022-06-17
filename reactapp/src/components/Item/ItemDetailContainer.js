import { useState, useEffect  } from "react";
import { getproductosBy } from "../async";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=({carrito, setCarrito})=>{
    const[productos, setproductos] = useState()
    const {idCart}= useParams()

    useEffect(()=>{
        getproductosBy(Number(idCart)).then(response=>{
            setproductos(response)
            
        })
    }, [])
    return(
        <>
            <ItemDetail {...productos} carrito={carrito} setCarrito={setCarrito}/>
        </>
    )
}

export default ItemDetailContainer;