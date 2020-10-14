import React, { useState } from 'react'
import Mailchimp from 'react-mailchimp-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./Footer.scss"

export default function Footer(props) {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState({
    emailValue: '',
    nameValue: '',
  })

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
      <iframe title="spotify" src="https://open.spotify.com/embed/album/3aBvYsTSyCAzGyp1buNzXz" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </span>
      { props.subscribe === 'in-footer' &&
        <form name="footer-subscribe" action="https://cayleythomas.us20.list-manage.com/subscribe/post" method="POST" noValidate id="footer-form" data-netlify="true">
        <input type="hidden" name="u" value="78686e4b82246c5bba3a92bd0"/>
        <input type="hidden" name="id" value="fef6220761"/>
        <label htmlFor='MERGE1'>
            <input 
                type="text" 
                name="FNAME" 
                id="MERGE1" 
                placeholder="Name"
                value={user.nameValue} 
                onChange={(e)=>{setUser({nameValue: e.target.value});}}
            />
        </label>
        <label htmlFor='MERGE0'>
            <input 
                type="email" 
                name="EMAIL" 
                id="MERGE0"
                placeholder="Email"
                value={user.emailValue} 
                onChange={ (e)=>{setUser({emailValue: e.target.value});} } 
                autoCapitalize="off" 
                autoCorrect="off"
              /> 
        </label>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="footer-form-button"/>
  
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
            <label htmlFor="b_name">Name: </label>
            <input type="text" name="b_name" tabIndex="-1" defaultValue="" placeholder="Freddie" id="b_name"/>
  
            <label htmlFor="b_email">Email: </label>
            <input type="email" name="b_email" tabIndex="-1" defaultValue="" placeholder="youremail@gmail.com" id="b_email"/>
  
            <label htmlFor="b_comment">Comment: </label>
            <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
        </div>
      </form>
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
          title="smart url"
          id="linktree"
          src="http://smarturl.it/howelsecanitellyou"
          name="iframe_a"
        />
      </div>}
    </div>
  )
}
