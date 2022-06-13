const productos= [
    //remeras
    {tipo: 'remeras', anime: 'SnK',  id:1, marca: 'GrafiZona', precio: 3630, imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/hange1-0de43cdd60dab2a38516274843860378-480-0.jpg', link: 'https://www.grafizona.com.ar/productos/hange-zoe-remera-estilo-snk-anime-manga-cosplay-aesthetic/?variant=360379635' },
    {tipo: 'remeras', anime: 'SnK',  id:2, marca: 'GrafiZona', precio: 3630, imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/levi-negro1-42e28f8a3a7826b4a015991485548697-480-0.jpg', link: 'https://www.grafizona.com.ar/productos/levi-remera-shingeki-no-kyojin-estilo-anime-manga-cosplay-aesthetic/?variant=189569835' },
    {tipo: 'remeras', anime: 'Shingeki no Kyojin',  id:3, marca: 'OTAKUSTORE', precio: 2600, imagen: 'https://http2.mlstatic.com/D_NQ_NP_694015-MLA47182006592_082021-O.webp', link: 'https://articulo.mercadolibre.com.ar/MLA-935275005-remera-anime-attack-on-titan-erwin-smith683-_JM?searchVariation=95048889712#searchVariation=95048889712&position=8&search_layout=stack&type=item&tracking_id=b0c7561b-ba76-4421-86c7-15e41364146e' },
    
    //Buzos
    {tipo: 'buzos', anime: 'Tokyo Revengers',  id:4, marca: 'KAO', precio: 3190, imagen: 'https://http2.mlstatic.com/D_NQ_NP_684860-MLA49367819535_032022-O.webp', link: 'https://articulo.mercadolibre.com.ar/MLA-935730525-buzo-tokyo-revengers-unisex-anime-otaku-manga-aesthetic-_JM?searchVariation=95399026377#searchVariation=95399026377&position=2&search_layout=grid&type=item&tracking_id=01c4e362-8fd6-4b7e-9ab5-238bb01f411e' },
    {tipo: 'buzos', anime: 'The Promised Neverland',  id:5, marca: 'Wiser', precio: 4460, imagen: 'https://http2.mlstatic.com/D_NQ_NP_929829-MLA45233208894_032021-O.webp', link: 'https://www.wisermerchandising.com.ar/MLA-912187769-buzo-anime-the-promise-neverland-emma-cute-kawaii-_JM?attributes=COLOR_SECONDARY_COLOR:QmxhbmNv,SIZE:WEw=' },
    {tipo: 'buzos', anime: 'Mob Psycho',  id:6, marca: 'Kao', precio: 3090, imagen: 'https://http2.mlstatic.com/D_NQ_NP_645002-MLA46142415877_052021-O.webp', link: 'https://articulo.mercadolibre.com.ar/MLA-922210650-buzo-mob-psycho-100-unisex-japon-otaku-anime-manga-_JM?searchVariation=85723775491#searchVariation=85723775491&position=4&search_layout=grid&type=item&tracking_id=51fc08d1-75b3-4169-bd67-315ce09e60ad' },
  
    //Pantalones
    {tipo: 'pantalones', anime: 'Kimetsu no Yaiba',  id:7, marca: '-', precio: 2194, imagen: 'https://ae01.alicdn.com/kf/H9933d846e2724c2a941d083640b6be08f/WAWNI-3D-Anime-japon-s-pantalones-Cargo-Harajuku-ropa-de-calle-Demon-Slayer-Kimetsu-no-Yaiba.jpg_Q90.jpg_.webp', link: 'https://es.aliexpress.com/item/4000972110630.html' },
    {tipo: 'pantalones', anime: 'Naruto',  id:8, marca: 'KAMIKAZEQUILMES', precio: 4000, imagen: 'http://http2.mlstatic.com/D_902245-MLA46689582437_072021-O.jpg', link: 'http://ww.shopix.com.ar/enventa-pantalon-jogging-naruto-estampado-anime-adultxs-y-ninxs_SPA928353108' },
    {tipo: 'pantalones', anime: 'Boku no Hero',  id:9, marca: 'Kao', precio: 8000, imagen: 'https://m.media-amazon.com/images/I/61FsvKzM6EL._AC_UX569_.jpg', link: 'https://www.amazon.com/-/es/Conjunto-sudadera-pantal%C3%B3n-pantalones-deportivos/dp/B09FK16ZMN' },
    
    
]

export const getproductos=()=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(productos)
       },1000) 
    })
}

export const getproductosByTipo=(tipoId)=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve(productos.filter(prod=>prod.tipo===tipoId))
       },100) 
    })
}

export const getproductosBy=(id)=>{
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
            resolve(productos.find(cart=> cart.id === id))
       },100) 
    })
}