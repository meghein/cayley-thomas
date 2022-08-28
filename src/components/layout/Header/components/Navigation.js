import React from 'react'
import { NavBar } from './Navigation.styles'
import { Box } from 'atomic-layout'
import { Link } from 'react-router-dom'

const navItems = ['home', 'about', 'media', 'subscribe']

function sortNavItem (item) {
  return {
    title: item === 'subscribe' ? 'MAILING LIST' : item.toUpperCase(),
    link: item === 'home' ? '/' : `/${item}`
  }
}

export function Navigation () {
  return (
    <NavBar>
      {navItems.map((item) => {
        const { title, link } = sortNavItem(item)
        return (
          <Box key={item} as='li'>
            <Link to={link}>{title}</Link>
          </Box>
        )
      })}
    </NavBar>
  )
}
