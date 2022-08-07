import './App.css'
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/cart';
import CartProvider from './components/context/CartContext';


function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/comida/:comidaId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
