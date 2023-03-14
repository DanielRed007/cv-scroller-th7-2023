
import React from 'react';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { aboutMe } from '../../data/aboutMe';


export const AboutMe = () => {
  return (
    <div className="section-container">
      <div className="title-container">
        <h1 className="section-main-title"> About Me</h1>
        <StarPurple500Icon className="about-icon" />
      </div>

      { aboutMe.map((text,i) => (
        <p className="section-text-paragraph" key={i}>{text}</p>
      )) }
    </div>
  )
}
