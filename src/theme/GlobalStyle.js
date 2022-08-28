import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '../../public/font.css'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: ${({ theme }) => theme.baseFontSize};
    color: ${({ theme }) => theme.purple};
    text-align: center;

    // h1, h2, h3, h4 {
    //   font-family: ${({ theme }) => theme.displayFont}
    // }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.bone};
      &:hover {
        color: ${({ theme }) => theme.bone};
      }
    }

    // for nav links:
    .highlight {
      color: ${({ theme }) => theme.bone};
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
