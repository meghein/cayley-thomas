import React from 'react'
import { Composition } from 'atomic-layout'

export const GridContainer = ({ children, minHeight = '100vh', minWidth = '100vw', ...rest }) => (
  <Composition
    minHeight={minHeight}
    minWidth={minWidth}
    {...rest}
  >
    {children}
  </Composition>
)
