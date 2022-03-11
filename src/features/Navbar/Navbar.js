import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>reddit client</Link>
        <button 
          className='navbar-toggler ms-auto' 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbar-collapse'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='about'>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='source'>Source</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;