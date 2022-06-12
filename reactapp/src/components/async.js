const cartas= [
    //ESPADA
    {numero: 1, palo: 'espada',  id:1, marca: 'PapperMate', precio: 150, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/11/carta-as-espadas-derecho.jpg' },
    
    //BASTO
    {numero: 1, palo: 'basto', id:11, marca: 'AchoA', precio: 130, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/12/carta-palo-bastos-derecha.jpg'},
  
    //ORO
    {numero: 1, palo: 'oro', id:21, marca: 'LetFun', precio: 250, imagen: 'https://astrologuias.com/wp-content/uploads/2020/12/396046c367e0e5caa253288b31f5df68.jpg'},
    
    //COPA
    {numero: 1, palo: 'copa',  id:31, marca: 'PlasticCo', precio: 450, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/11/palo-copas.jpg'},
    
]

export const getCartas=()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(cartas)
       },1000) 
    })
}

export const getCartasBy=(id)=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
            resolve(cartas.find(cart=> cart.id === id))
       },100) 
    })
}