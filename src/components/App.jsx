import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar'
import { CarritoProvider } from '../Context/CarritoContext';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Home } from './Home/Home';
import { Footer } from './Footer/Footer';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';

// Firebase

function App() {
  
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
          <Route path='/menu/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
        <Footer/>
      </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
