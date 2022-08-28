import React from 'react'
import { createGlobalStyle } from 'styled-components'
import '../../public/font.css'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    background-image: url("/images/binding-light.png");
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 200;
    font-size: 18px;
    color: ${({ theme }) => theme.aboutGreen};
    text-align: center;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.offWhite};
      &:hover {
        color: ${({ theme }) => theme.offWhite};
      }
    }

    // for nav links:
    .highlight {
      color: ${({ theme }) => theme.offWhite};
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
