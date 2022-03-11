import React from "react";

const Footer = () => {
  return (
    <footer className="container-fuild">
      <section id='creator'>
        <p className="lead">This project make by:</p>        
        <div id='gia-thanh'>
          <p>Nguyen Gia Thanh</p>
          <div className="icon-container">
            <a href='/' target='_blank'><i className="bi bi-facebook"></i></a>
            <a href='/' target='_blank'><i className="bi bi-twitter"></i></a>
            <a href='/' target='_blank'><i className="bi bi-inbox"></i></a>
            <a href='/' target='_blank'><i className="bi bi-github"></i></a>
          </div>
        </div>
        <div id='thanh-vu'>
          <p>Nguyen Ha Thanh Vu</p>
          <div className="icon-container">
            <a href='/' target='_blank'><i className="bi bi-facebook"></i></a>
            <a href='/' target='_blank'><i className="bi bi-twitter"></i></a>
            <a href='/' target='_blank'><i className="bi bi-inbox"></i></a>
            <a href='/' target='_blank'><i className="bi bi-github"></i></a>
          </div>
        </div>
        
      </section>
      <section id='infomation'>
        <p className="lead">More infomation about this project</p>
        <div className="icon-container">
            <a href='/' target='_blank'><i className="bi bi-file-pdf"></i></a>
            <a href='/' target='_blank'><i className="bi bi-file-text"></i></a>
            <a href='/' target='_blank'><i className="bi bi-inbox"></i></a>
            <a href='/' target='_blank'><i className="bi bi-github"></i></a>
          </div>
      </section>
    </footer>
  )
}

export default Footer;