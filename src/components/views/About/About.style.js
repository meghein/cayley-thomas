import styled from 'styled-components'

export const Image = styled.img`
  width: 60%;
  padding-top: 2em;
  @media (max-width: 600px) {
    min-width: 80%;
  }
  @media (max-width: 551px){
    padding-top: 5em
  }
`

export const Paragraph = styled.p`
  text-align: justify;
  width: 60%;
  line-height: 1.8em;
  @media (max-width: 600px) {
    min-width: 80%;
  }
`
