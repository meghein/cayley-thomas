import React from 'react'
import { FlexContainer } from 'components/base'
import { Wordmark, Navigation } from './components'

export function Header ({ pathname }) {
  return (
    <FlexContainer
      flexDirection='column'
      alignItems='center'
    >
      <Wordmark />
      <Navigation />
    </FlexContainer>
  )
}
