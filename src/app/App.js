import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Navbar from '../features/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Boring website</h1>      
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
