import React from 'react'
import { Box } from 'atomic-layout'

export function Wordmark () {
  return (
    <Box
      as='img'
      src='images/wordmark.png'
      alt='wordmark'
      paddingTop='1em'
      marginBottom='-2em'
      width='420px'
      maxWidth='80%'
    />
  )
}
