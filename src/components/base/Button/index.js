import React from 'react'
import { Link } from 'react-router-dom'
import { Button as EvergreenButton } from 'evergreen-ui'

const baseButton = (props) => {
  return (
    <EvergreenButton {...props}>
      {props.children}
    </EvergreenButton>
  )
}
const redirectLink = (props) => {
  return (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      {baseButton(props)}
    </Link>
  )
}

export function Button (props) {
  return (
    <>
      {props.to
        ? redirectLink(props)
        : baseButton(props)}
    </>
  )
}
