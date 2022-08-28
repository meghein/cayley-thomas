import React, { memo } from 'react'
import { Paragraph as EvergreenParagraph } from 'evergreen-ui'

export const Paragraph = memo(({ children, is, ...rest }) => {
  return (
    <EvergreenParagraph {...rest}>
      {children}
    </EvergreenParagraph>
  )
})
