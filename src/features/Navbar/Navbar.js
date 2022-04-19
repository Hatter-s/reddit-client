import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbar } from './NavbarSlice';
import { identityFetch } from './NavbarSlice';
import HistoryNavbar from '../HistoryNabar/HistoryNavbar';
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

        {navbar.isLoading 
        ? <i className='bi bi-arrow-clockwise' id='navbar-user-loading'></i> 
        : <div id='navbar-user'>
            <a 
              className='display' 
              href='#navbar-user-hidden'
              data-bs-toggle="collapse"
              role="button"
            >
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
            </a>
            <div id='navbar-user-hidden' className='collapse'>
              <HistoryNavbar />
            </div> 
        </div>}
      </div>
    </nav>
  )
}

export default Navbar;