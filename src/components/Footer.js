import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faSpotify, faYoutube, faBandcamp } from "@fortawesome/free-brands-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <span id="spotify-player">
        <SpotifyPlayer
          uri="spotify:album:3aBvYsTSyCAzGyp1buNzXz"
          size='compact'
          view='list'
          theme='black'
        />
      </span>
      <ul id="social">
        <li>
          <a
            className="instagram"
            href="https://www.instagram.com/hicayleythomas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </li>
        <li>
          <a
          className="facebook"
          href="https://www.facebook.com/hicayleythomas/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            href="https://twitter.com/hicayleythomas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
        </li>
        <li>
          <a
            className="spotify"
            href="https://open.spotify.com/artist/2YN6tsEmqzCKNYV5Irgzkv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify}/>
          </a>
        </li>
        <li>
          <a
            className="apple"
            href="https://music.apple.com/artist/cayley-thomas/784335170"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMusic}/>
          </a>
        </li>
        <li>
          <a
            className="bandcamp"
            href="https://cayleythomas.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBandcamp}/>
          </a>
        </li>
        <li>
          <a
            className="youtube"
            href="https://www.youtube.com/channel/UCtn6tbusEXHQOrMWXp6eAHg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </li>
      </ul>   
    </div>
  )
}
