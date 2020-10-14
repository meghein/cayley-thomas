import React, { useState } from 'react'
import Mailchimp from 'react-mailchimp-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faSpotify, faApple } from "@fortawesome/free-brands-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import "./Footer.scss"

export default function Footer(props) {
  const [showModal, setShowModal] = useState(false)

  function openModal() {
    setShowModal(true)
  }

  window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
      setShowModal(false);
    }
  }

  return (
    <div id="footer" className={props.page}>
      <span id="spotify-player">
      <iframe src="https://open.spotify.com/embed/album/3aBvYsTSyCAzGyp1buNzXz" width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        />
      }
      <div id="right-footer">
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
          {/* <li>
          </li> */}
        </ul>
        <button
          className="music"
          onClick={openModal}
        >
          {/* <FontAwesomeIcon icon={faMusic}/> */}
          Buy/Stream
        </button>
      </div>
      {showModal &&
      <div id="modal">
        <iframe
          id="linktree"
          src="http://smarturl.it/howelsecanitellyou"
          name="iframe_a"
        />
      </div>}
    </div>
  )
}
