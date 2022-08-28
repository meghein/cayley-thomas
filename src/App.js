import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Switch } from 'react-router-dom'
// import smoothScrollPolyfill from 'smoothscroll-polyfill'
import { Normalize } from 'styled-normalize'
import { ThemeProvider as EvergreenTheme } from 'evergreen-ui'
import { ThemeProvider } from 'styled-components'
import { useEvergreenTheme, GlobalStyle, theme } from 'theme'
import { Spinner, Router } from 'components/base'

const App = () => {
  const evergreenTheme = useEvergreenTheme()
  // smoothScrollPolyfill.polyfill()
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <EvergreenTheme value={evergreenTheme}>
          <Router>
            <Normalize />
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Routes default />
              </Switch>
            </Suspense>
          </Router>
        </EvergreenTheme>
      </ThemeProvider>
    </Root>
  )
}

export default App
