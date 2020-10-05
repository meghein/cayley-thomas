import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faTwitter, faSpotify, faYoutube, faBandcamp } from "@fortawesome/free-brands-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div>
      <a href="https://www.instagram.com/hicayleythomas/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.facebook.com/hicayleythomas/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
      <a href="https://twitter.com/hicayleythomas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://open.spotify.com/artist/2YN6tsEmqzCKNYV5Irgzkv" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} /></a>
      <a href="https://music.apple.com/artist/cayley-thomas/784335170" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMusic} /></a>
      <a href="https://www.youtube.com/channel/UCtn6tbusEXHQOrMWXp6eAHg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="https://cayleythomas.bandcamp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBandcamp} /></a>
      
    </div>
  )
}
