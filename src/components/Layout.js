import React, {Fragment} from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { reset } from "styled-reset";
import styled from "styled-components"

import Menu from './Menu'
import gatsbyLogo from '../../static/gatsby.png'

import { createGlobalStyle, ThemeProvider } from "styled-components";

import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
      font-family: 'aaux_nextmedium';
      src: url('../fonts/aauxnext-md-webfont.woff2') format('woff2'),
           url('../fonts/aauxnext-md-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'aaux_nextbold';
      src: url('../fonts/aauxnext-bd-webfont.woff2') format('woff2'),
           url('../fonts/aauxnext-bd-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'aaux_nextsemibold';
      src: url('../fonts/aauxnext-sm-webfont.woff2') format('woff2'),
           url('../fonts/aauxnext-sm-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  html {
    font-family: 'aaux_nextmedium', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, 
  ::after, ::before {
    box-sizing: border-box;
}
`;

const colors = {
  white: "#FFFFFF",
  black: "#2A2A2A",
  darkBlue: "#383D59",
  babyBlue: "#47CDE2"
};

const defaultTheme = {
  font: {
    primary: '"aaux_nextmedium", sans-serif',
    secondary: '"aaux_nextsemibold", sans-serif',
    tertiary: '"aaux_nextbold", sans-serif',
  },
  color: {
    primary: colors.babyBlue,
    text: {
      primary: colors.darkBlue
    }
  }
};

const Container = styled.div`
  max-width: 1272px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export default ({ children, location }) => (
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
    render={data => {
      let isHome

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        isHome = true;
      } else {
        isHome = false;
      }
      return (
        <>
          <ThemeProvider theme={defaultTheme}>
            <Fragment>
              <GlobalStyle />
              <Menu isHome={isHome}/>
              <Container>
                {children}
              </Container>
              <Footer/>
            </Fragment>
          </ThemeProvider>
        </>
      )
    }}
  />
)
