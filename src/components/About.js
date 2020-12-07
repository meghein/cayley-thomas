import React from 'react';
import { about } from '../data';
import './About.scss';

export default function About() {
  return (
    <div id='about'>
      <img src={about.profile_picture.src} alt={about.profile_picture.alt}/>
      {about.bio.map(paragraph => <p>{paragraph}</p>)}
    </div>
  )
};
