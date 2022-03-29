import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbar } from './NavbarSlice';
import { identityFetch } from './NavbarSlice';
//css
import './Navbar.css';

const Navbar = () => {
  //action
  const action = useDispatch();

  //state 
  const navbar = useSelector(selectNavbar);
  const identity = navbar.identity;

  //effect
  useEffect(() => {
    action(identityFetch());
  },[action])

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
        {navbar.isLoading 
        ? <i className='bi bi-arrow-clockwise' id='navbar-user-loading'></i> 
        : <div id='navbar-user'>
            <img 
              src={identity['snoovatar_img']}
              alt='lorem ipsum' 
              id='navbar-user-img' />
            <h2 id='navbar-user-name'>{identity.name}</h2>
            <p id='navbar-user-coins'>Coins:{identity.coins}</p>
            <p id='navbar-user-karma'>karma:{identity['total_karma']}</p>
        </div>}
        
      </div>
    </nav>
  )
}

export default Navbar;