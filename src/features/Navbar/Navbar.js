import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"



const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'><img id ="main-icon" src="https://cdn-icons-png.flaticon.com/512/52/52053.png" alt=""/></Link>
        <button type='button' class="btn btn-light" id="home">Home</button>
        <form id='search' class="form-inline my-2 my-lg-0">
          <input id='search-bar' class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button id='search-button' class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
        
        <section id='user' >
          <img id='user-icon' alt='/' src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/276056514_1920086988187184_1368438565368509908_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Kp7qnIUAg90AX-3uCZu&tn=tFfAYszXuokIL2RM&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WpNbjrX6KMm-wM_0srZ635ZfSij48j0DHOMU2TxcXeA&oe=623F8323'/>
          <p id='user-name'> Nguyen Gia Thanh </p>
          <div class="btn-group" id='dropdown'>
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">User Profile</button></li>
            <li><hr class="dropdown-divider"/></li>
            <li><button class="dropdown-item" type="button">Log Out</button></li>
          </ul>
        </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar;