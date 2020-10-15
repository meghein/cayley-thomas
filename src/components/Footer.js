import React, { useState } from 'react'
// import Mailchimp from 'react-mailchimp-form';
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
      <span id="spotify-player" className="box">
      <iframe title="spotify" className="spotify" src="https://open.spotify.com/embed/album/3aBvYsTSyCAzGyp1buNzXz" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </span>
      { props.subscribe === 'in-footer' &&
        <div id="mc_embed_signup" className="box">
          <form action="https://cayleythomas.us20.list-manage.com/subscribe/post?u=78686e4b82246c5bba3a92bd0&amp;id=fef6220761" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                  <input
                    type="text"
                    placeholder="Name"
                    name="TEXTYUI_3"
                    className=""
                    id="mce-TEXTYUI_3"
                    value={user.nameValue} 
                    onChange={(e)=>{setUser({nameValue: e.target.value});}}
                  />
                  <input
                    type="email" 
                    placeholder="Email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    value={user.emailValue} 
                    onChange={ (e)=>{setUser({emailValue: e.target.value});} } 
                    autoCapitalize="off" 
                    autoCorrect="off"
                  />
                  <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                    <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                  </div>

                  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_78686e4b82246c5bba3a92bd0_fef6220761" tabIndex="-1" defaultValue=""/>
                  </div>
              </div>
          </form>
        </div>
      }
      {showModal &&
        <div id="modal">
          <iframe
            title="smart url"
            id="linktree"
            src="https://smarturl.it/howelsecanitellyou"
            name="iframe_a"
          />
        </div>
      }
      <div id="right-footer" className="box">
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
          Buy/Stream
        </button>
      </div>
    </div>
  )
}