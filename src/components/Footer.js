import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faTwitter, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <div>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faSpotify} />
      <FontAwesomeIcon icon={faMusic} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  )
}
