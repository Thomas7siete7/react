import { useState, useEffect  } from "react";
import { getCartasBy } from "../async";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const[cartas, setCartas] = useState()
    const {idCart}= useParams()

    useEffect(()=>{
        getCartasBy(Number(idCart)).then(response=>{
            setCartas(response)
            
        })
    }, [])
    console.log(idCart)
    return(
        <>
            <ItemDetail {...cartas}/>
        </>
    )
}

export default ItemDetailContainer;