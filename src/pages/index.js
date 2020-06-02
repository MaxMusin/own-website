import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import Img from 'gatsby-image'

export const pageQuery = graphql`
    query IndexQuery {
        allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
            edges {
                node {
                    metadata {
                        description
                    }
                    slug
                    title
                    created(formatString: "DD MMMM, YYYY")
                }
            }
        }
        cosmicjsSettings(slug: { eq: "general" }) {
            metadata {
                site_title
                site_heading
                site_subheading
                about_text
                author_name
                author_bio
                author_avatar {
                    imgix_url
                }
            }
        }
        file(relativePath: { eq: "max_header.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.cosmicjsSettings.metadata.site_title')
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const aboutText = get(this, 'props.data.cosmicjsSettings.metadata.about_text')
    const location = get(this, 'props.location')
    const siteHeading = get(this, 'props.data.cosmicjsSettings.metadata.site_heading')
    const siteSubheading = get(this, 'props.data.cosmicjsSettings.metadata.site_subheading')
    const maxHeader = get(this, 'props.data.file.childImageSharp.fluid')

    console.log(maxHeader)

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <Header heading={siteHeading} subheading={siteSubheading} img={maxHeader}/>
        <section id="Services">
          <h2>What I do</h2>
          <div>
            <h3>Front-end development</h3>
            <p>Are you a store owner without an eCommerce? I can help you design & build fully custom landing pages, product & collection pages.</p>
          </div>
          <div>
            <h3>UX/UI Design</h3>
            <p>Need help with designing your project? I can create beautiful website designs based on your content, or redesign old websites to improve your conversions or achieve your business goals.</p>
          </div>
          <div>
            <h3>Shopify Design & Setup</h3>
            <p>Are you a store owner without an eCommerce? I can help you design & build fully custom landing pages, product & collection pages.</p>
          </div>
        </section>
        <section id="Blog">
          <h2>Some blog posts</h2>
          {posts.map(({ node }) => {
            const title = get(node, 'title') || node.slug
            return (
              <div key={node.slug}>
                <h3

                >
                  <Link style={{ boxShadow: 'none' }} to={`/posts/${node.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.created}</small>
                <p
                  dangerouslySetInnerHTML={{ __html: node.metadata.description }}
                />
              </div>
            )
          })}
        </section>
        <section id="About">
          <h2>About me</h2>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: aboutText }}
          />
        </section>
        <section id="Contact">
          <h2>Just say hi.</h2>
          <p>I'm always open to discuss about your project, improve your online presence or/and help with your UX/UI design challenges.</p>
          <h5>Email me at</h5>
          <a href="mailto:hello@maximemusin.me">
            hello@maximemusin.me
          </a>
          <h5>Social media</h5>
          <a href="https://www.linkedin.com/in/maxime-musin/" target="_blank">
            IN
          </a>
          <a href="https://www.instagram.com/max_musin/" target="_blank">
            IG
          </a>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex
