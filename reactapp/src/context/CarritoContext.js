import { useState, createContext } from "react";

export const CarContexto = createContext()

export const CarritoProvee=({children})=>{

    const [carrito, setCarrito] = useState([])
    console.log(carrito)
    
    let i=0;

    const agProd= (prod)=>{
      if(!estaDentro(prod[i].id)){
        console.log(prod[i].id)
        setCarrito([...carrito, prod])
        i++
      }
    }

    const estaDentro=(id)=>{
        return carrito.some(produ=> produ[i].id === id)
    }

    const Borrar=({id})=>{
        const borrado = carrito.filter(prod => prod[i].id == id)

        setCarrito(borrado)
    }

    const CarCantidad=()=>{
        let cantidad=0;

        carrito.forEach(prod=>{
            cantidad += prod[i].cantidad
            console.log(cantidad)
        })
        return cantidad
    }

    return(
        <CarContexto.Provider value={{carrito, agProd, Borrar, CarCantidad}}>
            {children}    
        </CarContexto.Provider>
    )
}

export default CarContexto