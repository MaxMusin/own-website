import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { StateProvider } from '../context/store'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

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
    render={(data) => {
      let isHome

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      location.pathname === rootPath || location.pathname === postsPath ? isHome = true : isHome = false

      return (
        <StateProvider>
          <Navbar isHome={isHome} />
          {children}
          <Footer />
        </StateProvider>
      )
    }}
  />
)
