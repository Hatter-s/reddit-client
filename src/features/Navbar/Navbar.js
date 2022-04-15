import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbar } from './NavbarSlice';
import { identityFetch } from './NavbarSlice';
//css
import './navbar.css';

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
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img 
            id ="nav-icon" 
            src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
            alt=""
          />
        </Link>

        {/* <button 
          type='button' 
          className="btn btn-light" 
          id="nav-home"
        >Home</button>

        <form 
          id='nav-search' 
          className="form-inline my-2 my-lg-0"
        >
          <input 
            id='nav-search-bar' className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          />
          <button 
            id='nav-search-button' 
            className="btn btn-outline-dark my-2 my-sm-0" type="submit"
          >Search</button>
        </form> */}
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
            <button className='dropdown-trigger'>
              <i className='bi bi-arrow-down' ></i>
            </button>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar;