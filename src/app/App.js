import React from 'react';
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer/Footer';
import Navbar from '../features/Navbar/Navbar';
import './App.css';
import NavbarSearch from '../features/FloatSearch/FloatSearch';
import { selectPath } from './utilitySlice';

function App() {
  //state
  const path = useSelector(selectPath);
  
  
  return (
    <div className="App">
      <Navbar/>
      {/search/.test(path) 
        ? null 
        : <NavbarSearch />
      }
      <h1>Boring website</h1>      
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
