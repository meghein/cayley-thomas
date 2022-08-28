import React from 'react'
import styled from 'styled-components'
import { Spinner as EvergreenSpinner } from 'evergreen-ui'
import { GridContainer } from '../Container'

const Background = styled.div`
  background-color: #3D405B;
`

export const Spinner = () => {
  return (
    <GridContainer as={Background} placeContent='center'>
      <EvergreenSpinner />
    </GridContainer>
  )
}
