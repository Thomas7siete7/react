import React, {useState, createContext} from 'react';
import './App.css';
import NAvBar from './components/NAvBar';
import Saludar from './ItemListContainer/ListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CarritoProvee } from './context/CarritoContext';


function App() {


  return (
    <div className="App">
      <CarritoProvee>
        <BrowserRouter>
          <NAvBar/>
          <Routes>
            <Route path='/' element={<Saludar mensaje='Buenonassss'/>} />
            <Route path='/tipo/:tipoId' element={<Saludar mensaje='Buenonassss'/>} />
            <Route path='/detalle/:idCart' element={<ItemDetailContainer />} />
            <Route path='/lista' element={<h1>CARRITO</h1>} />
          </Routes>
        </BrowserRouter>
      </CarritoProvee>
    </div>
  );
}

export default App;
