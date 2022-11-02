import React from 'react'
import { FlexContainer } from 'components/base'
import { Pane } from 'evergreen-ui'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function Page ({ children, paddingTop = 0 }) {
  return (
    <>
      <Header />
      <FlexContainer
        as={Pane}
        flexDirection='column'
        alignItems='center'
        backgroundColor='#A5A58D'
        backgroundImage='url("/images/fabric.png")'
        paddingTop={paddingTop}
      >
        {children}
      </FlexContainer>
      <Footer />
    </>
  )
}
