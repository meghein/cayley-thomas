import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';

export default function NavBar(props) {
  const [menu, setMenu] = useState(false)

  function clickHandler(e){
    props.setPage(e.currentTarget.dataset.id)
  }

  function openMenu() {
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <div id="nav-menu">
      <ul id={props.id}>
        <li onClick={clickHandler} data-id='home'>HOME</li>
        <li onClick={clickHandler} data-id='about bar'>ABOUT</li>
        <li onClick={clickHandler} data-id='media bar'>MEDIA</li>
        <li onClick={clickHandler} data-id='contact bar'>CONTACT</li>
        <li onClick={clickHandler} data-id='subscribe bar'>MAILING LIST</li>
        <li><a href="https://cayleythomas.bandcamp.com/merch" target="_blank" rel="noopener noreferrer">SHOP</a></li>
      </ul>
      <FontAwesomeIcon id='menu-bar' icon={faBars} onClick={openMenu}/>
    </div>
  )
}
