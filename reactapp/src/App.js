import React, {useState} from 'react';
import './App.css';
import NAvBar from './components/NAvBar';
import Saludar from './ItemListContainer/ListContainer';
import Contar from './components/contador';

function App() {

  const handleAdd = ()=>{
    console.log('se ejecutó')
  }

  return (
    <div className="App">
      
      <NAvBar/>
      <Saludar mensaje='Buenonassss'/>
      <Contar onAdd={handleAdd}/>
      
    </div>
  );
}

export default App;
