import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import  Search  from '../Search/Search';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'><img id ="main-icon" src="https://cdn-icons-png.flaticon.com/512/52/52053.png" alt=""/></Link>
        <button type='button' class="btn btn-light" id="home">Home</button>
        <Search />
        <button type='button' class="btn btn-warning" id="coin">Get Coins</button>
        <button type='button' class="btn btn-dark" id="log-in">Log In</button>
        <button type='button' class="btn btn-light" id="sign-up">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar;