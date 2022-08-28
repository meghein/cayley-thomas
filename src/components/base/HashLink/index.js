import React from 'react'
import { Interactive } from 'react-interactive'
import { HashLink as Link } from 'react-router-hash-link'

export function HashLink ({ children, hash, pathname, ...rest }) {
  return (
    <Interactive
      as={Link}
      to={hash ? `#${hash}` : '#'}
      smooth
      {...rest}
    >
      {children}
    </Interactive>
  )
}
