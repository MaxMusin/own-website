import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { reset } from 'styled-reset'
import styled from 'styled-components'
import { StateProvider } from "../context/store"
import Navbar from './Nav/Navbar'
import Wrapper from './Wrapper'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: 'aaux_nextmedium', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, 
  ::after, ::before {
    box-sizing: border-box;
  }
  
  ::selection {
    color: #fff !important;
    background: #e35d5b;
  }
  
  ::-moz-selection {
    color: #fff !important;
    background: #e35d5b;
  }
  
  ::-webkit-selection {
    color: #fff !important;
    background: #e35d5b;
  }
`

const colors = {
  white: '#FFFFFF',
  black: '#2A2A2A',
  darkBlue: '#383D59',
  babyBlue: '#47CDE2',
}

const defaultTheme = {
  font: {
    primary: '"aaux_nextmedium", sans-serif',
    secondary: '"aaux_nextsemibold", sans-serif',
    tertiary: '"aaux_nextbold", sans-serif',
  },
  color: {
    primary: colors.babyBlue,
    text: {
      primary: colors.darkBlue,
    },
  },
}

const Container = styled.div`
  max-width: ${(props) => props.width}px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export default ({ children, location, width }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            site_subheading
          }
        }
      }
    `}
    render={(data) => {
      let isHome

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        isHome = true
      } else {
        isHome = false
      }


      return (
        <>
          <ThemeProvider theme={defaultTheme}>
            <StateProvider>
              <GlobalStyle />
              <Navbar isHome={isHome} />
              <Container width={width}>{children}</Container>
              <Footer />
            </StateProvider>
          </ThemeProvider>
        </>
      )
    }}
  />
)
