import React from 'react'
import { GlobalStyle, defaultTheme } from './src/theme/global-style'
import './src/components/style/fonts.css'
import { StateProvider } from './src/context/store'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={defaultTheme}>
    <StateProvider>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </StateProvider>
  </ThemeProvider>
)
