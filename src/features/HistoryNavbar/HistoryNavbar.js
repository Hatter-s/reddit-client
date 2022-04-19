import React from "react";
import { Link } from "react-router-dom";
import "./HistoryNavbar.css";
import { selectNavbar } from "../Navbar/NavbarSlice";
import { useSelector } from "react-redux";

const HistoryNavbar = () => {
  //state
  const navbar = useSelector(selectNavbar);

  return (
    <section id="history-navbar">
      <Link className="userbias" to="/userbias">
        {navbar.identity.name}
      </Link>
      <a
        className="btn btn-outline-dark trigger-a" 
        href="#navbar-history" 
        data-bs-toggle="collapse"
        role="button"
      >History</a>
      <ul id="navbar-history" className="collapse">
        <li>
          <Link to="/history/upvote">Upvote</Link>
        </li>
        <li>
          <Link to="/history/downvote">Downvote</Link>
        </li>
        <li>
          <Link to="/history/comments">Comments</Link>
        </li>
        <li>
          <Link to="/history/saved">Saved</Link>
        </li>
      </ul>
    </section>
  )
}

export default HistoryNavbar;
