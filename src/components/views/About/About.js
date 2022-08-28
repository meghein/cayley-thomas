import React from 'react'
import { bio } from './constants'

export function About () {
  return (
    <div id='about'>
      <img src={bio.profilePicture.src} alt={bio.profilePicture.alt} />
      {bio.summary.map((paragraph, index) => <p key={`bio${index}`}>{paragraph}</p>)}
    </div>
  )
}
