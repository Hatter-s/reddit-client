import React from 'react';
import './contact-us.css'
import {Header,Teams,Information} from '../../../features/ContactUs/contactUs'


function Contact() {
    return (
      <div id="contact">     
        <Header/>
        <Teams/>
        <Information/>      
      </div>
    );
  }

export default Contact;