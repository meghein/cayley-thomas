import React from 'react'
import { NavBar } from './Navigation.styles'
import { Box } from 'atomic-layout'

const navItems = ['home', 'about', 'media', 'subscribe']

export function Navigation (props) {
  return (
    <NavBar>
      {navItems.map((item) => {
        const title = item === 'subscribe' ? 'MAILING LIST' : item.toUpperCase()
        return (
          <Box key={item} as='li'>
            {title}
          </Box>
        )
      })}
    </NavBar>
  )
}
