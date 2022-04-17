import React from 'react';
import './contact.css'
import {ContactTeam,Information} from '../../../features/ContactUs/contactUs'


function Contact() {
    return (
      <div className='ContactContainer' id="contact">     
        <ContactTeam/>
        <Information/>      
      </div>
    );
  }

export default Contact;