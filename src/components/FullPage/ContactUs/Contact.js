import React from 'react';
import './contact.css'
import {ContactHeader,ContactTeam,Information} from '../../../features/ContactUs/contactUs'


function Contact() {
    return (
      <div className='ContactContainer' id="contact">     
        <h1 id='contact-header'>Contact Us</h1>
        <div id="contact-team">
            <p>GTV Team</p>
            <p>Gnosis To Victory</p>
        </div>
        <div id="information">
                <section id='person'>
                    <i class="bi bi-person-fill"></i>
                    <p>Mr.Thanh</p>
                </section>
                <section id='phone'>
                    <i class="bi bi-telephone-fill"></i>
                    <p>+84 921852309</p>
                </section>
                <section id='email'>
                    <i class="bi bi-envelope-fill"></i>
                    <p>thanhHH1907@gmail.com</p>
                </section>
                <section id='address'>
                    <i class="bi bi-door-open-fill"></i>
                    <p>178 Quan Nhan, Thanh Xuan , Ha Noi , VietNam</p>
                </section>
        </div>    
      </div>
    );
  }

export default Contact;