import React from 'react';
import './NavBar.scss'


export default function NavBar(props) {

  function clickHandler(e){
    props.setPage(e.currentTarget.dataset.id)
  }

  return (
    <div>
      <ul id="nav">
        <li onClick={clickHandler} data-id='home'>HOME</li>
        <li onClick={clickHandler} data-id='about'>ABOUT</li>
        <li onClick={clickHandler} data-id='media'>VIDEO</li>
        <li onClick={clickHandler} data-id='music'>MUSIC</li>
        <li onClick={clickHandler} data-id='contact'>CONTACT</li>
        <li onClick={clickHandler} data-id='subscribe'>MAILING LIST</li>
        <li><a href="https://cayleythomas.bandcamp.com/merch" target="_blank" rel="noopener noreferrer">SHOP</a></li>
      </ul>
    </div>
  )
}
