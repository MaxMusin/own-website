import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from './Button'
import { useStaticQuery, graphql } from "gatsby"
// import maxHeader from '../../images/max_header.png';

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
`
const ImageWrapper = styled.div`
  width: 30%;
  max-width: 350px;
`

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 65%;
  padding-right: 130px;
  justify-content: center;
  
  h1 {
    font-family: aaux_nextsemibold;
    font-size: 32px;
    color: #220E0C;
    letter-spacing: 1.4px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  
  h2 {
    font-family: aaux_nextsemibold;
    font-size: 42px;
    color: #220E0C;
    letter-spacing: 1.4px;
    line-height: 54px;
  }
`


const Header = ({heading, subheading, img}) => (
  <HeaderWrapper>
    <Heading>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <Button>Let's talk</Button>
    </Heading>
    <ImageWrapper>
      <Img fluid={img} alt="" />
    </ImageWrapper>

  </HeaderWrapper>
)

export default Header