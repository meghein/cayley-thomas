import React, { useState } from 'react';
import { nav } from '../data';
import './NavBar.scss';

export default function NavBar(props) {
  const [menu, setMenu] = useState(false)

  function clickHandler(e){
    props.setPage(e.currentTarget.dataset.id)
    setMenu(false)
  }

  function openMenu() {
    menu ? setMenu(false) : setMenu(true)
  }

  window.onclick = function(event) {
    if (event.target === document.getElementById("open-menu")) {
      setMenu(false);
    }
  }

  const list = nav.map((item, index) => {
    let data, title;
    item === 'home' ? data = item : data = `${item} bar`
    item === 'subsribe' ? title = 'MAILING LIST' : title = item.toUpperCase()
    return <li onClick={clickHandler} data-id={data} key={`nav${index}`}>{title}</li>
  })

  const shop = (<li><a href="https://cayleythomas.bandcamp.com/merch" target="_blank" rel="noopener noreferrer">SHOP</a></li>)

  return (
    <div id="nav-menu">
      <ul id={props.id}>
        {list}
        {shop}
      </ul>
      <i id='menu-bar' className="fas fa-bars" onClick={openMenu}></i>
      {menu &&
        <div id="open-menu">
        <ul id="toggled-menu">
          {list}
          {shop}
        </ul>
        </div>
      }
    </div>
  )
}
