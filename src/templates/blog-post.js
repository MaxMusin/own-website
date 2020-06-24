import React, { useEffect } from 'react'
import get from 'lodash/get'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import he from 'he'

import Layout from '../components/Layout'
import ShareButtons from '../components/ShareButtons'
import { media } from '../components/style/mediaQueries'
import { fontSize, lineHeight } from '../components/style/Mixin'
import Container from '../components/Container'

const ReturnButton = styled.div`
  margin-top: 60px;
  a {
    background: #ffffff;
    border: 1px solid #e35d5b;
    ${fontSize(16)};
    ${lineHeight(15)};
    font-weight: normal;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    font-family: ${(props) => props.theme.font.primary};
    width: auto;
    display: inline-flex;
    color: #e35d5b;
    padding: 10px 20px 11px;
    letter-spacing: 1.4px;
    text-decoration: none;
  }
`

const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  justify-content: space-between;
`

const BlogPostTags = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  color: #c4adad;
  letter-spacing: 1.4px;
  margin-bottom: 40px;
  margin-top: -20px;
`

const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AuthorImageWrapper = styled.div`
  width: 68px;
`

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  p {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: #220e0c;
    letter-spacing: 1.4px;
    line-height: 26px;

    &:last-child {
      color: #c4adad;
      font-size: 14px;
    }
  }
`

const ShareButtonsWrapper = styled.div``

const BlogTitle = styled.h1`
  font-family: ${(props) => props.theme.font.tertiary};
  font-size: 36px;
  color: #220e0c;
  letter-spacing: 1.4px;
  line-height: 48px;
  margin-bottom: 40px;
  margin-top: 60px;

  ${media.sm`
    font-size: 42px;
    line-height: 54px;
  `}
`
const BlogText = styled.div`
  margin-bottom: 90px;

  ol {
    list-style: decimal;
    padding-left: 21px;
  }

  p,
  li {
    margin-bottom: 29px;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: #220e0c;
    letter-spacing: 1.4px;
    line-height: 26px;
    text-align: justify;

    strong {
      font-family: ${(props) => props.theme.font.tertiary};
    }

    em {
      font-style: italic;
    }
  }

  a {
    color: #e35d5b;
    display: inline-block;
    position: relative;
    text-decoration: none;

    &:before {
      content: '';
      height: 1px;
      background-image: linear-gradient(90deg, #e35d5b 0%, #e53935 100%);
      width: 100%;
      display: block;
      position: absolute;
      bottom: 5px;
    }
  }

  h2 {
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 36px;
    line-height: 48px;
    color: #220e0c;
    letter-spacing: 1.4px;
    margin-bottom: 40px;
    margin-top: 60px;
  }

  hr {
    display: block;
    border: 0;
    text-align: center;
    overflow: visible;
    margin-top: 52px;
    margin-bottom: 42px;
    height: 0;

    &:before {
      content: '...';
      display: inline-block;
      margin-left: 0.6em;
      color: rgba(0, 0, 0, 0.68);
      position: relative;
      font-family: ${(props) => props.theme.font.secondary};
      top: -22px;
      font-size: 30px;
      letter-spacing: 0.6em;
    }
  }
`

const BlogPostImageWrapper = styled.div`
  margin-bottom: 48px;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.cosmicjsPosts
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const site = get(this, 'props.data.site')
    const { previous, next } = this.props.pageContext



    const decodeHTML = (str) => {
      if (str === null || str === '') {
        return false
      }
      else {
        str = str.toString()
      }

      const result = str.replace(/<[^>]*>/g, '');

      return he.decode(result)
    }

    return (
      <Container width={680}>
        <SEO title={post.title} description={decodeHTML(post.metadata.description)} />
        <ReturnButton>
          <AniLink cover to={`/`} direction="right" bg="#E53935">
            ← Back to main
          </AniLink>
        </ReturnButton>

        <BlogTitle>{post.title}</BlogTitle>
        <BlogPostTags>{post.metadata.tag}</BlogPostTags>
        <BlogHeader>
          <Author>
            <AuthorImageWrapper>
              <Img
                fluid={author.author_avatar.local.childImageSharp.fluid}
                alt={author.author_name}
              />
            </AuthorImageWrapper>
            <AuthorContent>
              <p>{author.author_name}</p>
              <p>{post.created}</p>
            </AuthorContent>
          </Author>
          <ShareButtonsWrapper>
            <ShareButtons
              url={`${site.siteMetadata.siteUrl}${post.slug}`}
              title={post.title}
            />
          </ShareButtonsWrapper>
        </BlogHeader>
        <BlogPostImageWrapper>
          <Img fluid={post.metadata.hero.local.childImageSharp.fluid} alt="" />
        </BlogPostImageWrapper>

        <BlogText dangerouslySetInnerHTML={{ __html: post.content }} />
        {/*<ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={`posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={`posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            </li>
          )}
        </ul>*/}
      </Container>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      slug
      created(formatString: "MMMM DD, YYYY")
      metadata {
        tag
        description
        hero {
          local {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_avatar {
          local {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
