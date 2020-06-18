import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import sr from '../components/ScrollReveal'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import Layout from '../components/Layout'
import Row from '../components/Row'
import Col from '../components/Col'
import Header from '../components/Header'
import MyForm from '../components/Form'
import {media} from '../components/style/mediaQueries'

import FeIcon from '../assets/frontend_icon.svg'
import DesignIcon from '../assets/design_icon.svg'
import ShopIcon from '../assets/shop_icon.svg'
import Instagram from '../assets/instagram.svg'
import WhatsApp from '../assets/whatsapp.svg'
import LinkedIn from '../assets/linkedin.svg'

import { fontSize, lineHeight } from '../components/style/Mixin'

const Section = styled.section`
  margin-bottom: 130px;
  padding-top: 40px;
`

const TitleSection = styled.h2`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 36px;
  line-height: 48px;
  color: #220e0c;
  letter-spacing: 1.4px;
  margin-bottom: 90px;
`

const SubTitleSection = styled.h2`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 20px;
  color: #220e0c;
  letter-spacing: 1.4px;
  line-height: 26px;
  margin-top: 40px;
  margin-bottom: 28px;
`

const ServiceItems = styled.div`
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  //margin: 0 -16px;
`

const ServiceItem = styled(Col)`
  margin-bottom: 60px;
  
  &:nth-child(3) {
        margin-bottom: 0px;
    }
  
  ${media.sm`
    margin-bottom: 0px;
  `}

  p {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: #7a6d6d;
    letter-spacing: 1.4px;
    line-height: 26px;
  }
`

const BlogPost = styled(Row)`
  flex-direction: column-reverse;
  
  ${media.sm`
    flex-direction: row;
  `}
`

const BlogPostContent = styled.div`
  //flex: 0 1 50%;
`

const BlogPostTitle = styled(SubTitleSection)`
  margin-bottom: 14px;
  margin-top: 16px;
`

const BlogPostTags = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  color: #c4adad;
  letter-spacing: 1.4px;
  margin-bottom: 28px;
`

const BlogPostDescription = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #7a6d6d;
  letter-spacing: 1.4px;
  line-height: 26px;
  margin-bottom: 32px;
`
const BlogPostDate = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #c4adad;
  letter-spacing: 1.4px;
  line-height: 26px;
  margin-bottom: 32px;
`

const BlogPostButton = styled(AniLink)`
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
`

const BlogPostImageWrapper = styled.div`
  //flex: 0 1 50%;
  margin-bottom: 48px;
 
  ${media.sm`
    padding-left: 60px;
    margin-bottom: 0px;
  `}
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const AboutContent = styled.div`
  //flex: 0 1 50%;
  //padding-right: 16px;
`

const AboutText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #7a6d6d;
  letter-spacing: 1.4px;
  line-height: 26px;
`

const AboutImageWrapper = styled.div`
  //flex: 0 1 50%;
  width: 100%;
  padding-left: 48px;
  padding-right: 48px;
  margin-top: 60px;
  ${media.sm`
    padding-left: 60px;
    padding-right: 46px;
    margin-top: 0px;
  `}
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ContactContent = styled.div`
  //flex: 0 1 50%;
  //padding-right: 16px;
`

const ContactText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #220e0c;
  letter-spacing: 1.4px;
  line-height: 26px;
  margin-bottom: 40px;
`

const ContactLabel = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  color: #c4adad;
  letter-spacing: 1.4px;
  margin-bottom: 8px;
`

const ContactEmail = styled.a`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 16px;
  color: #220e0c;
  letter-spacing: 1.4px;
  line-height: 26px;
  margin-bottom: 40px;
  display: block;
`

const SocialMediaLabel = styled(ContactLabel)`
  margin-bottom: 17px;
`

const SocialMedia = styled.a`
  display: inline-block;
  margin-right: 20px;
`

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
            tag
            hero {
              local {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
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
        author_avatar {
          imgix_url
        }
      }
    }
    header_image: file(relativePath: { eq: "max_header.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about_image: file(relativePath: { eq: "max_about.png" }) {
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
  componentDidMount = () => {
    const configUp = {
      origin: 'bottom',
      duration: 1000,
      delay: 350,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      interval: 200,
    }

    const configLeft = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    const configRight = {
      origin: 'right',
      duration: 1000,
      delay: 550,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal('.service', configUp)
    sr.reveal(this.refs.blogPostContent, configLeft)
    sr.reveal(this.refs.blogPostImage, configRight)
    sr.reveal(this.refs.aboutContent, configLeft)
    sr.reveal(this.refs.aboutImage, configRight)
  }
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const aboutText = get(
      this,
      'props.data.cosmicjsSettings.metadata.about_text'
    )
    const location = get(this, 'props.location')
    const siteHeading = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_heading'
    )
    const siteSubheading = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_subheading'
    )
    const maxHeader = get(this, 'props.data.header_image.childImageSharp.fluid')
    const maxAbout = get(this, 'props.data.about_image.childImageSharp.fluid')

    return (
      <Layout location={location} width={1272}>
        <Helmet title={siteTitle} />
        <Header
          heading={siteHeading}
          subheading={siteSubheading}
          img={maxHeader}
        />
        <Section id="services">
          <TitleSection>What I do</TitleSection>
          <Row>
            <ServiceItem col={4} className="service">
              <FeIcon />
              <SubTitleSection>Front-end development</SubTitleSection>
              <p>
                Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Cras ultricies ligula sed magna
                dictum porta.
              </p>
            </ServiceItem>
            <ServiceItem col={4} className="service">
              <DesignIcon />
              <SubTitleSection>UX/UI Design</SubTitleSection>
              <p>
                Need help with designing your project? I can create beautiful
                website designs based on your content, or redesign old websites
                to improve your conversions or achieve your business goals.
              </p>
            </ServiceItem>
            <ServiceItem col={4} className="service">
              <ShopIcon />
              <SubTitleSection>Shopify Design & Setup</SubTitleSection>
              <p>
                Are you a store owner without an eCommerce? I can help you
                design & build fully custom landing pages, product & collection
                pages.
              </p>
            </ServiceItem>
          </Row>
        </Section>
        <Section id="blog">
          <TitleSection>Some blog posts</TitleSection>
          {posts.map(({ node }) => {
            const title = get(node, 'title') || node.slug
            const tag = get(node, 'metadata.tag')
            const date = get(node, 'metadata.date')
            const picture = get(
              node,
              'metadata.hero.local.childImageSharp.fluid'
            )
            return (
              <BlogPost key={node.slug}>
                <Col col={6}>
                  <BlogPostContent ref="blogPostContent">
                    <BlogPostTitle>{title}</BlogPostTitle>
                    <BlogPostTags>{tag}</BlogPostTags>
                    <BlogPostDescription
                      dangerouslySetInnerHTML={{
                        __html: node.metadata.description,
                      }}
                    />
                    <BlogPostDate>{date} - Maxime Musin</BlogPostDate>
                    <BlogPostButton
                      cover
                      to={`/posts/${node.slug}`}
                      direction="left"
                      bg="#E53935"
                      onClick={e => {
                        e.preventDefault()
                        trackCustomEvent({
                          category: "Read last blogpost",
                          action: "Click",
                          label: {title},
                        })
                      }}
                    >
                      Read it
                    </BlogPostButton>
                  </BlogPostContent>
                </Col>
                <Col col={6}>
                  <BlogPostImageWrapper ref="blogPostImage">
                    <Img fluid={picture} alt="" />
                  </BlogPostImageWrapper>
                </Col>
              </BlogPost>
            )
          })}
        </Section>
        <Section id="about">
          <TitleSection>About me</TitleSection>
          <Row>
            <Col col={6}>
              <AboutContent ref="aboutContent">
                <AboutText dangerouslySetInnerHTML={{ __html: aboutText }} />
              </AboutContent>
            </Col>
            <Col col={6}>
              <AboutImageWrapper ref="aboutImage">
                <Img fluid={maxAbout} alt="" />
              </AboutImageWrapper>
            </Col>
          </Row>
        </Section>
        <Section id="contact">
          <TitleSection>Just say hi.</TitleSection>
          <Row>
            <Col col={6}>
              <ContactContent>
                <ContactText>
                  I'm always open to discuss about your project, improve your
                  online presence or/and help with your UX/UI design challenges.
                </ContactText>
                <ContactLabel>Email me at</ContactLabel>
                <ContactEmail href="mailto:hello@maximemusin.me">
                  hello@maximemusin.me
                </ContactEmail>
                <SocialMediaLabel>Social media</SocialMediaLabel>
                <SocialMedia
                  href="https://www.instagram.com/max_musin/"
                  target="_blank"
                >
                  <Instagram />
                </SocialMedia>
                <SocialMedia
                  href="https://www.linkedin.com/in/maxime-musin/"
                  target="_blank"
                >
                  <LinkedIn />
                </SocialMedia>
                <SocialMedia href="https://wa.me/0032474793924" target="_blank">
                  <WhatsApp />
                </SocialMedia>
              </ContactContent>
            </Col>
            <Col col={6}>
              <MyForm />
            </Col>
          </Row>
        </Section>
      </Layout>
    )
  }
}

export default BlogIndex
