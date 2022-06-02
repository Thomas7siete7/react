
import './App.css';
import NAvBar from './components/NAvBar';
import saludar from './ItemListContainer/listContainer';

function App() {
  return (
    <div className="App">
      
      <NAvBar/>
      <saludar mensaje={'buenonas'}/>
      
    </div>
  );
}

export default App;
