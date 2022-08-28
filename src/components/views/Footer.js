import React, { useState } from 'react'
import { footer } from '../data'
import './Footer.scss'

export default function Footer (props) {
  const [showModal, setShowModal] = useState(false)
  const { spotify, linktree, social } = footer

  function openModal () {
    setShowModal(true)
  };

  window.onclick = function (event) {
    if (event.target === document.getElementById('modal')) {
      setShowModal(false)
    }
  }

  return (
    <div id='footer' className={props.page}>
      <span id='spotify-player' className='box'>
        <iframe title='spotify' className='spotify' src={spotify} frameBorder='0' allowtransparency='true' allow='encrypted-media' />
      </span>
      {showModal &&
        <div id='modal'>
          <iframe title='smart url' id='linktree' src={linktree} name='iframe_a' />
        </div>}
      <div id='right-footer' className='box'>
        <ul id='social'>
          {Object.entries(social).map(([name, site], index) => {
            return (
              <li key={`link${index}`}>
                <a className={name} href={site} target='_blank' rel='noopener noreferrer'>
                  <i className={`fab fa-${name}`} />
                </a>
              </li>
            )
          })}
        </ul>
        <button className='music' onClick={openModal}>
          Buy/Stream
        </button>
      </div>
    </div>
  )
};
