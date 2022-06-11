const cartas= [
    //ESPADA
    {numero: 1, palo: 'espada', valor: 14, id:1, tanto: 1, precio: 150, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/11/carta-as-espadas-derecho.jpg' },
    
    //BASTO
    {numero: 1, palo: 'basto', valor: 13, id:11, tanto: 1, precio: 130, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/12/carta-palo-bastos-derecha.jpg'},
  
    //ORO
    {numero: 1, palo: 'oro', valor: 8, id:21, tanto: 1, precio: 250, imagen: 'https://astrologuias.com/wp-content/uploads/2020/12/396046c367e0e5caa253288b31f5df68.jpg'},
    
    //COPA
    {numero: 1, palo: 'copa', valor: 8, id:31, tanto: 1, precio: 450, imagen: 'https://www.cadizdirecto.com/tarot/significado-cartas/baraja-espanola/wp-content/uploads/2020/11/palo-copas.jpg'},
    
]

export const getCartas=()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(cartas)
       },2000) 
    })
}