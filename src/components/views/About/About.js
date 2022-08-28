import React from 'react'
import { Page } from 'components/layout'
import { Image, Paragraph } from './About.style'
import { bio } from './constants'

export function About () {
  return (
    <Page>
      <Image
        src={bio.profilePicture.src}
        alt={bio.profilePicture.alt}
      />
      {bio.summary.map((text, index) => (
        <Paragraph key={`bio${index}`}>
          {text}
        </Paragraph>
      ))}
    </Page>
  )
}
