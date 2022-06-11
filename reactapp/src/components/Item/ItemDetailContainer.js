import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCartasBy } from "../async";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer=()=>{

    const [cartas, setCartas]= useState()
    const params= useParams()

    useEffect(()=>{
        getCartasBy(params.idCart).then(resp=>{
            setCartas(resp)
        })
    }, [])

    console.log(cartas)

    return(
        <>
        <ItemDetail {...cartas}/>
        </>
    )
}

export default ItemDetailContainer;