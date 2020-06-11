import React from 'react'
// import gatsbyLogo from '../../static/gatsby.png'
import styled from "styled-components"
import Logo from "../assets/logo.svg";

const FooterWrapper = styled.div`
  background: #F9F9F9;
`

const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 52px 16px;
    display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

const FooterMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 50%;
`

const FooterTextWrapper = styled.div`
  align-self: auto;
  p{
    margin-left: 22px;
    font-family: AauxNext-Medium;
    font-size: 16px;
    color: #C4ADAD;
    letter-spacing: 1.4px;
    font-family: AauxNext-Medium;
    font-size: 16px;
    color: #C4ADAD;
    letter-spacing: 1.4px;
    margin-bottom: 4px;
  }
`
const CopywrightContainer = styled(FooterTextWrapper)`
  p{
    text-align: right;
    margin-bottom: 0;
    margin-top: 18px;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterMain>
        <Logo/>
        <FooterTextWrapper>
          <p>Maxime Musin</p>
          <p>Freelance Front-end Developer & UX/UI Designer Consultant</p>
        </FooterTextWrapper>
      </FooterMain>
      <CopywrightContainer>
        <p>
          © 2020 Maxime Musin
        </p>
      </CopywrightContainer>
    </Container>
  </FooterWrapper>
)

export default Footer