import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
import Mailchimp from 'react-mailchimp-form';
// import MailingList from './MailingList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faSpotify, faApple } from "@fortawesome/free-brands-svg-icons"
// import { faMusic } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"

export default function Footer(props) {
  return (
    <div id="footer" className={props.page}>
      <span id="spotify-player">
        <SpotifyPlayer
          uri="spotify:album:3aBvYsTSyCAzGyp1buNzXz"
          size='compact'
          view='list'
          theme='black'
        />
      </span>
      { props.subscribe === 'in-footer' &&
        <Mailchimp
        className='form'
        action='https://cayleythomas.us20.list-manage.com/subscribe/post?u=78686e4b82246c5bba3a92bd0&amp;id=fef6220761'
        fields={[
          {
            name: 'FNAME',
            placeholder: 'name',
            type: 'text',
            required: true
          },
          {
            name: 'EMAIL',
            placeholder: 'email',
            type: 'email',
            required: true
          }
        ]}
        />
      }
      <ul id="social">
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
            <FontAwesomeIcon icon={faApple}/>
          </a>
        </li>
      </ul>   
    </div>
  )
}
