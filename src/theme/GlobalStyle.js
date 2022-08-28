import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '../../public/font.css'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  font-size: 18px;
    color: ${({ theme }) => theme.purple};
    text-align: center;

    // h1, h2, h3, h4 {
    //   font-family: ${({ theme }) => theme.displayFont}
    // }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.main};
      &:hover {
        color: ${({ theme }) => theme.main};
      }
    }

    // for nav links:
    .highlight {
      color: ${({ theme }) => theme.main};
    }

    .fixed-nav {
      position: fixed;
      top: 0;
      z-index: 20;
    }

    ul > li {
      opacity: 1.0;
    }
    ul:hover > li:not(:hover) {
      opacity: 0.5;
    }
  }
`

export const GlobalStyle = () => {
  return (
    <>
      <GlobalCSS />
    </>
  )
}
