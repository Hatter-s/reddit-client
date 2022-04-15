import React, { useState } from "react";
import "./FloatSearch.css";

const NavbarSearch = () => {
  //state
  const [ searchValue, setSearchValue ] = useState('');
  const [ displaySearch, setDisplaySearch ] = useState(false);

  //handle event
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?term=${searchValue}`;
  }

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  }

  const triggerSearch = () => {
    setDisplaySearch(!displaySearch);
  }

  return (
    <section id="navbar-search">
       <button 
        className="search-trigger"
        onClick={triggerSearch}
      >
         <i className="bi bi-search"></i>
       </button>
       <form 
        onSubmit={handleSubmit}
        className={displaySearch ? "no-display-form" : "display-form"}
       >
        <input 
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="search-input"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-dark search-submit"
        />
       </form>
    </section>
  )
}

export default NavbarSearch;
