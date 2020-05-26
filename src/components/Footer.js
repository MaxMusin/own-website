import React from 'react'
// import gatsbyLogo from '../../static/gatsby.png'
import styled from "styled-components"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
const FooterText = styled.div`
  align-self: auto;
  flex: 0 0 50%;
  p{
    color: #6e6d7a;
    margin-left: 30px;
    font-size: 18px;
    line-height: 24px;
  }
`
const CopywrightContainer = styled(FooterText)`
  p{
    margin-top: 10px;
    color: #6e6d7a;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      <p>
        Maxime Musin<br/>
        Freelance Front-end Developer & UX/UI Designer Consultant
      </p>
    </FooterText>
    <CopywrightContainer>
      <p>
        © 2020 Maxime Musin<br/>
        Made with ❤ & passion
      </p>
    </CopywrightContainer>
  </FooterWrapper>
)

export default Footer