import React from 'react'
import { Box } from 'atomic-layout'

export const FlexContainer = ({ children, minHeight = '100vh', minWidth = '100vw', ...rest }) => (
  <Box
    flex
    minHeight={minHeight}
    minWidth={minWidth}
    {...rest}
  >
    {children}
  </Box>
)
