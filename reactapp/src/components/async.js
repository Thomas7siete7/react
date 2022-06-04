const cartas= [
    //ESPADA
    {numero: 1, palo: 'espada', valor: 14, id:1, tanto: 1, imagen: 'img/espadas_1.jpg'},
    {numero: 2, palo: 'espada', valor: 9, id:2, tanto: 2, imagen: 'img/espadas_2.jpg'},
    {numero: 3, palo: 'espada', valor: 10, id:3, tanto: 3, imagen: 'img/espadas_3.jpg'},
    {numero: 4, palo: 'espada', valor: 1, id:4, tanto: 4, imagen: 'img/espadas_4.jpg'},
    {numero: 5, palo: 'espada', valor: 2, id:5, tanto: 5, imagen: 'img/espadas_5.jpg'},
    {numero: 6, palo: 'espada', valor: 3, id:6, tanto: 6, imagen: 'img/espadas_6.jpg'},
    {numero: 7, palo: 'espada', valor: 12, id:7, tanto: 7, imagen: 'img/espadas_7.jpg'},
    {numero: 10, palo: 'espada', valor: 5, id:8, tanto: 0, imagen: 'img/espadas_10.jpg'},
    {numero: 11, palo: 'espada', valor: 6, id:9, tanto: 0, imagen: 'img/espadas_11.jpg'},
    {numero: 12, palo: 'espada', valor: 7, id:10, tanto: 0, imagen: 'img/espadas_12.jpg'},
    //BASTO
    {numero: 1, palo: 'basto', valor: 13, id:11, tanto: 1, imagen: 'img/bastos_1.jpg'},
    {numero: 2, palo: 'basto', valor: 9, id:12, tanto: 2, imagen: 'img/bastos_1.jpg'},
    {numero: 3, palo: 'basto', valor: 10, id:13, tanto: 3, imagen: 'img/bastos_1.jpg'},
    {numero: 4, palo: 'basto', valor: 1, id:14, tanto: 4, imagen: 'img/bastos_1.jpg'},
    {numero: 5, palo: 'basto', valor: 2, id:15, tanto: 5, imagen: 'img/bastos_1.jpg'},
    {numero: 6, palo: 'basto', valor: 3, id:16, tanto: 6, imagen: 'img/bastos_1.jpg'},
    {numero: 7, palo: 'basto', valor: 4, id:17, tanto: 7, imagen: 'img/bastos_1.jpg'},
    {numero: 10, palo: 'basto', valor: 5, id:18, tanto: 0, imagen: 'img/bastos_1.jpg'},
    {numero: 11, palo: 'basto', valor: 6, id:19, tanto: 0, imagen: 'img/bastos_1.jpg'},
    {numero: 12, palo: 'basto', valor: 7, id:20, tanto: 0, imagen: 'img/bastos_1.jpg'},
    //ORO
    {numero: 1, palo: 'oro', valor: 8, id:21, tanto: 1, imagen: 'img/oros_1.jpg'},
    {numero: 2, palo: 'oro', valor: 9, id:22, tanto: 2, imagen: 'img/oros_1.jpg'},
    {numero: 3, palo: 'oro', valor: 10, id:23, tanto: 3, imagen: 'img/oros_1.jpg'},
    {numero: 4, palo: 'oro', valor: 1, id:24, tanto: 4, imagen: 'img/oros_1.jpg'},
    {numero: 5, palo: 'oro', valor: 2, id:25, tanto: 5, imagen: 'img/oros_1.jpg'},
    {numero: 6, palo: 'oro', valor: 3, id:26, tanto: 6, imagen: 'img/oros_1.jpg'},
    {numero: 7, palo: 'oro', valor: 11, id:27, tanto: 7, imagen: 'img/oros_1.jpg'},
    {numero: 10, palo: 'oro', valor: 5, id:28, tanto: 0, imagen: 'img/oros_1.jpg'},
    {numero: 11, palo: 'oro', valor: 6, id:29, tanto: 0, imagen: 'img/oros_1.jpg'},
    {numero: 12, palo: 'oro', valor: 7, id:30, tanto: 0, imagen: 'img/oros_1.jpg'},
    //COPA
    {numero: 1, palo: 'copa', valor: 8, id:31, tanto: 1, imagen: 'img/copa_1.jpg'},
    {numero: 2, palo: 'copa', valor: 9, id:32, tanto: 2, imagen: 'img/copa_1.jpg'},
    {numero: 3, palo: 'copa', valor: 10, id:33, tanto: 3, imagen: 'img/copa_1.jpg'},
    {numero: 4, palo: 'copa', valor: 1, id:34, tanto: 4, imagen: 'img/copa_1.jpg'},
    {numero: 5, palo: 'copa', valor: 2, id:35, tanto: 5, imagen: 'img/copa_1.jpg'},
    {numero: 6, palo: 'copa', valor: 3, id:36, tanto: 6, imagen: 'img/copa_1.jpg'},
    {numero: 7, palo: 'copa', valor: 4, id:37, tanto: 7, imagen: 'img/copa_1.jpg'},
    {numero: 10, palo: 'copa', valor: 5, id:38, tanto: 0, imagen: 'img/copa_1.jpg'},
    {numero: 11, palo: 'copa', valor: 6, id:39, tanto: 0, imagen: 'img/copa_1.jpg'},
    {numero: 12, palo: 'copa', valor: 7, id:40, tanto: 0, imagen: 'img/copa_1.jpg'}
]

export const getCartas=()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(cartas)
       },2000) 
    })
}