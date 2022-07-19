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
import CartProvider from './context/CartContext';

function App() {
  return (
    
    <BrowserRouter>
      <CartProvider >
              <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a Pichonos' />}/>
              <Route path='/carrito' element={<Cart />}/>
              <Route path='/category/:categoryN' element={<ItemListContainer mensaje='Bienvenidos a Pichonos' />}/>
              <Route path='/category/:categoryN/:id' element={<ItemDetailContainer />} />
          </Routes>  
      </CartProvider>      
    </BrowserRouter>
  );
}

export default App;
