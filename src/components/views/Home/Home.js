import React from 'react'
import { Pane } from 'evergreen-ui'
import { Footer, Header } from 'components/layout'

export function Home () {
  return (
    <Pane
      minHeight='100vh'
      backgroundImage='url("/images/splash-page.jpg")'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
      id='home'
    >
      <Header />
      <Footer />
    </Pane>
  )
}
