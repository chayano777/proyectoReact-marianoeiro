import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje='Bienvenidos a Pichonos' />
    </>
  );
}

export default App;
