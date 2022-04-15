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
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'><img id ="nav-icon" src="https://cdn-icons-png.flaticon.com/512/52/52053.png" alt=""/></Link>
        <button type='button' class="btn btn-light" id="nav-home">Home</button>
        <form id='nav-search' class="form-inline my-2 my-lg-0">
          <input id='nav-search-bar' class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button id='nav-search-button' class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
        
        <section id='nav-user' >
          <img id='nav-user-icon' alt='/' src='https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/276056514_1920086988187184_1368438565368509908_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MNFcLHwFfagAX-SLvfu&tn=tFfAYszXuokIL2RM&_nc_ht=scontent.fhan2-1.fna&oh=00_AT86uvXVpETwdjAY1fF5EqUFgBMofsqDJUVxQoVSj5VNsA&oe=62496663'/>
          <p id='nav-user-name'> Nguyen Gia Thanh </p>
          <div class="btn-group" id='nav-dropdown'>
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">User Profile</button></li>
            <li><hr class="dropdown-divider"/></li>
            <li><button class="dropdown-item" type="button">Log Out</button></li>
          </ul>
        </div>
        </section>
    
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