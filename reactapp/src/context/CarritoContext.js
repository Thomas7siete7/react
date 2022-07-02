import { useState, createContext } from "react";

export const CarContexto = createContext()

export const CarritoProvee=({children})=>{

    const [carrito, setCarrito] = useState([])
    
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
        const borrado = carrito.filter(prod => prod[i].id === id)

        setCarrito(borrado)
        console.log(carrito)
    }

    const CarCantidad=()=>{
        let cantidad=0;

        carrito.forEach(prod=>{
            cantidad += prod[i].cantidad
            console.log(cantidad)
        })
        return cantidad
    }

    const CarTotal=()=>{
        let cantidad=0;
        let total;
        carrito.forEach(prod=>{
            cantidad += (prod[i].cantidad)
            total= cantidad*prod[i].precio
            console.log(cantidad)
        })
        return total
    }



    return(
        <CarContexto.Provider value={{carrito, estaDentro, agProd, Borrar, CarCantidad, CarTotal}}>
            {children}    
        </CarContexto.Provider>
    )
}

export default CarContexto