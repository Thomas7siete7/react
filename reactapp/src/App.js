import React from 'react';
import './App.css';
import NAvBar from './components/NAvBar';
import Saludar from './ItemListContainer/ListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CarritoProvee } from './context/CarritoContext';
import { NotificacionProvee } from './components/notificacion/Notificacion';
import CarritoWeb from './components/Item/carro';
import Logear from './components/Item/login';

function App() {


  return (
    <div className="App">
      <NotificacionProvee>
        <CarritoProvee>
          <BrowserRouter>
            <NAvBar/>
            <Routes>
              <Route path='/' element={<Saludar mensaje='Buenonassss'/>} />
              <Route path='/tipo/:tipoId' element={<Saludar mensaje='Buenonassss'/>} />
              <Route path='/detalle/:idCart' element={<ItemDetailContainer />} />
              <Route path='/lista/:carro' element={<CarritoWeb/>} />
              <Route path='/login/:log' element={<Logear/>} />
            </Routes>
          </BrowserRouter>
        </CarritoProvee>
      </NotificacionProvee>
    </div>
  );
}

export default App;
