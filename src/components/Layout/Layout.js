import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from 'theme'

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default Layout
