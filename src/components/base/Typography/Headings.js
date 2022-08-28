import React, { memo } from 'react'
import { Heading as EvergreenHeading } from 'evergreen-ui'

const H1 = 'h1'
const H2 = 'h2'
const H3 = 'h3'
const H4 = 'h4'
const H5 = 'h5'
const H6 = 'h6'

export const Heading = memo(({ children, is, ...rest }) => {
  return (
    <EvergreenHeading
      is={is || H2}
      {...rest}
    >
      {children}
    </EvergreenHeading>
  )
})

export const Heading1 = memo(Heading)
Heading1.defaultProps = {
  is: H1,
  size: 800
}

export const Heading2 = memo(Heading)
Heading2.defaultProps = {
  is: H2,
  size: 700
}

export const Heading3 = memo(Heading)
Heading3.defaultProps = {
  is: H3,
  size: 600
}

export const Heading4 = memo(Heading)
Heading4.defaultProps = {
  is: H4,
  size: 500
}

export const Heading5 = memo(Heading)
Heading5.defaultProps = {
  is: H5,
  size: 400
}

export const Heading6 = memo(Heading)
Heading6.defaultProps = {
  is: H6,
  size: 300
}
