import React from 'react';
import './about.css'
import {AboutTeam,AboutCharacter} from '../../../features/AboutUs/aboutUs'


function About() {
    return (
      <div className="AboutFunction" id="about-function">     
        <AboutTeam/>
        <AboutCharacter/>  
      </div>
    );
  }

export default About;