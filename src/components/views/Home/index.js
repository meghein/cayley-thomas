import React from 'react'
import { Heading1, Heading3, GridContainer } from 'components/base'
import { MediaLinks } from './components/MediaLinks'

const Home = () => {
  return (
    <GridContainer placeContent='center' justifyContent='center' id='home'>
      <Heading1 size={900}>COMING BACK SOON!</Heading1>
      <Heading3>(currently under maintenance)</Heading3>
      <MediaLinks />
    </GridContainer>
  )
}

export default Home
