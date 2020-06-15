import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from './Button'
import Col from './Col'
import Row from './Row'
import { media } from './style/mediaQueries'

const HeaderWrapper = styled.header`
  margin-bottom: 190px;
`
const ImageWrapper = styled.div`
  //padding-left: 48px;
  //padding-right: 48px;
  margin-top: 60px;
  max-width: 350px;

  ${media.sm`
    max-width: initial;
    width: 100%;
    flex-direction: row;
    padding-right: 0;
    padding-left: 42px;
    margin-top: 0px;
  `}
`

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  h1 {
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 32px;
    color: #220e0c;
    letter-spacing: 1.4px;
    line-height: 48px;
    margin-bottom: 24px;
  }

  h2 {
    font-family: ${(props) => props.theme.font.tertiary};
    font-size: 36px;
    color: #220e0c;
    letter-spacing: 1.4px;
    line-height: 48px;
    
    ${media.sm`
      font-size: 42px;
      line-height: 54px;
  `}
  }

  button {
    margin-top: 34px;
  }
`

const Header = ({ heading, subheading, img }) => (
  <HeaderWrapper>
    <Row>
      <Col col={7}>
        <Heading>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <Button>Let's talk</Button>
        </Heading>
      </Col>
      <Col col={4} offset={1}>
        <ImageWrapper>
          <Img fluid={img} alt="" />
        </ImageWrapper>
      </Col>
    </Row>
  </HeaderWrapper>
)

export default Header
