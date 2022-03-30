import React from 'react';
import './about.css'
import {AboutHeader,Vu,AboutTeam,Thanh} from '../../../features/AboutUs/aboutUs'


function About() {
    return (
      <div id="about">     
        <AboutHeader/>
        <AboutTeam/>
        <div className ="character">
        <Vu/> 
        <Thanh/>       
        </div>
      </div>
    );
  }

export default About;