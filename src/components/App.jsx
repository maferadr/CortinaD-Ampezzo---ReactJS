import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from '../components/Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Home } from './Home/Home';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
        <Route path='/menu/:idCategoria' element={<ItemListContainer/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
