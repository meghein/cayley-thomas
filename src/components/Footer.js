import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faTwitter, faSpotify, faYoutube, faBandcamp } from "@fortawesome/free-brands-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <a
        className="instagram"
        href="https://www.instagram.com/hicayleythomas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a
        className="facebook"
        href="https://www.facebook.com/hicayleythomas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare}/>
      </a>
      <a
        className="twitter"
        href="https://twitter.com/hicayleythomas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a
        className="spotify"
        href="https://open.spotify.com/artist/2YN6tsEmqzCKNYV5Irgzkv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSpotify}/>
      </a>
      <a
        className="apple"
        href="https://music.apple.com/artist/cayley-thomas/784335170"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faMusic}/>
      </a>
      <a
        className="youtube"
        href="https://www.youtube.com/channel/UCtn6tbusEXHQOrMWXp6eAHg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube}/>
      </a>
      <a
        className="bandcamp"
        href="https://cayleythomas.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp}/>
      </a>
    </div>
  )
}
