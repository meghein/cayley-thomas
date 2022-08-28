import styled from 'styled-components'

export const NavBar = styled.ul`
  display: none;
  width: 100%;
  padding: 0;
  list-style: none;
  @media (min-width: 551px) {
    display: inline;
    font-size: .9em;
  }
  @media (min-width: 594px) {
    font-size: 1em;
  }
  li {
    display: inline-block;
    padding: 8px 15px;
    text-decoration: none;
    color: #fbf6ec;
    cursor: pointer;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`
