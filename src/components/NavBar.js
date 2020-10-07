import React from 'react';
import './NavBar.scss'


export default function NavBar(props) {

  function clickHandler(e){
    props.setPage(e.currentTarget.dataset.id)
  }

  return (
    <div>
      <ul id={props.id}>
        <li onClick={clickHandler} data-id='home'>HOME</li>
        <li onClick={clickHandler} data-id='about bar'>ABOUT</li>
        <li onClick={clickHandler} data-id='media bar'>MEDIA</li>
        <li onClick={clickHandler} data-id='contact bar'>CONTACT</li>
        <li onClick={clickHandler} data-id='subscribe bar'>MAILING LIST</li>
        <li><a href="https://cayleythomas.bandcamp.com/merch" target="_blank" rel="noopener noreferrer">SHOP</a></li>
      </ul>
    </div>
  )
}
