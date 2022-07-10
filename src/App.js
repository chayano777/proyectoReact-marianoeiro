import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {
	BrowserRouter,
	Routes,
	Route,
 } from "react-router-dom";

function App() {
  return (
           
      <BrowserRouter>
              <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a Pichonos' />}/>
              <Route path='/carrito' element={<Cart />}/>
              <Route path='/:id' element={<ItemDetailContainer />} />
          </Routes>  
      </BrowserRouter>

    
  );
}

export default App;
