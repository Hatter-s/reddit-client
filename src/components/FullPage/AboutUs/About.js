import React from 'react';
import './about-us.css'
import {Header,Vu,Team,Thanh} from '../../../features/AboutUs/aboutUs'


function About() {
    return (
      <div id="about">     
        <Header/>
        <Team/>
        <div id ="char">
        <Vu/> 
        <Thanh/>       
        </div>
      </div>
    );
  }

export default About;