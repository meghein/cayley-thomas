import React from 'react'
import { Box } from 'atomic-layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from './MediaLinks.styles'

const socialLinks = [
  { key: 'github', url: '//github.com/meghein', icon: faGithub },
  { key: 'linkedin', url: '//www.linkedin.com/in/meghan-hein', icon: faLinkedin }
]

export const MediaLinks = () => {
  return (
    <Box flex marginTop={16} justifyContent='center' gap={16}>
      {socialLinks.map(({ key, url, icon }) => (
        <ExternalLink
          key={key}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={icon} />
        </ExternalLink>
      ))}
    </Box>
  )
}
