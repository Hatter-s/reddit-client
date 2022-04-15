import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Navbar from '../features/Navbar/Navbar';
import './App.css';
import NavbarSearch from '../features/FloatSearch/FloatSearch';

function App() {
  //some need value
  const path = window.location.pathname;
  
  return (
    <div className="App">
      <Navbar/>
      {/search/.test(path) ? null : <NavbarSearch />}
      <h1>Boring website</h1>      
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
