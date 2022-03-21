import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <footer className="container-fuild">
      <div id="footer">
        <figure id="footer-icon" >
            <img  src="https://cdn-icons-png.flaticon.com/512/52/52053.png"/>
            <p id="footer-name">Reddit</p>
        </figure>
        <section id="footer-menu">
            <Link className='footer-link' to="/">About</Link>
            <Link className='footer-link' to="/">Terms</Link>
            <Link className='footer-link' to="/">User Help Community</Link>
        </section>
        <section id="footer-team">
            <Link className='footer-link' id="team-name" to="/">GTV Team</Link>
            <p>Email:abcxyz@gmail.com</p>
            <p>Phone:0912398293</p>
            <p>Address:178 Quan Nhan, Ha Noi, Viet Nam</p>
        </section>
        </div>
    </footer>
  )
}

export default Footer;