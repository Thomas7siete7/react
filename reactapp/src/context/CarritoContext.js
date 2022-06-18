import { useState, createContext } from "react";

export const CarContexto = createContext()

export const CarritoProvee=({children})=>{

    const [carrito, setCarrito] = useState([])
    console.log(carrito)
  
    const agProd= (prod)=>{
      if(!carrito.some(produ=> produ.id === prod.id)){
        setCarrito([...carrito, prod])
        
      }
    }

    const Borrar=({id})=>{
        const borrado = carrito.filter(prod => prod.id == id)

        setCarrito(borrado)
    }

    return(
    <CarContexto.Provider value={{carrito, agProd, Borrar}}>
        {children}    
    </CarContexto.Provider>
    )
}

export default CarContexto