import React, {useState} from 'react';
import './App.css';
import NAvBar from './components/NAvBar';
import Contar from "./components/contador"
import Saludar from './ItemListContainer/ListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const handleAdd = ()=>{
    console.log('se ejecutó')
  }

  return (
    <div className="App">
      {/* <Contar onAdd={handleAdd}/> */}
      <BrowserRouter>
        <NAvBar/>
        <Routes>
          <Route path='/' element={<Saludar mensaje='Buenonassss'/>} />
          <Route path='/detalle/:idCart' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
