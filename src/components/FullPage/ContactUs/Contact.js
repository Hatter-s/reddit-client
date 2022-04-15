import React from 'react';
import './contact.css'
import {ContactHeader,ContactTeam,Information} from '../../../features/ContactUs/contactUs'


function Contact() {
    return (
      <div className='ContactContainer' id="contact">     
        <ContactHeader/>
        <ContactTeam/>
        <Information/>      
      </div>
    );
  }

export default Contact;