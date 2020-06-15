import React from 'react'
import styled from 'styled-components'
import {media} from '../components/style/mediaQueries'

import Logo from '../assets/logo.svg'

const FooterWrapper = styled.div`
  background: #f9f9f9;
`

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 52px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  
  ${media.sm`
    flex-direction: row;
  `}
`

const FooterMain = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
  flex-direction: column;
  
  ${media.sm`
    flex-direction: row;
  `}
  
  svg {
    min-width: 58px;
  }
`

const FooterTextWrapper = styled.div`
  align-self: auto;
  margin-top: 20px;
  text-align: center;
  
  ${media.sm`
    text-align: left;
    margin-top: 0px;
    margin-left: 22px;
  `}
  
  p {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: #7a6d6d;
    letter-spacing: 1.4px;
    margin-bottom: 4px;
    line-height: 26px;
  }
`
const CopywrightContainer = styled(FooterTextWrapper)`
  p {
    text-align: right;
    margin-bottom: 0;
    margin-top: 18px;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterMain>
        <Logo />
        <FooterTextWrapper>
          <p>Maxime Musin</p>
          <p>Freelance Front-end Developer & UX/UI Designer Consultant</p>
        </FooterTextWrapper>
      </FooterMain>
      <CopywrightContainer>
        <p>© 2020 Maxime Musin</p>
      </CopywrightContainer>
    </Container>
  </FooterWrapper>
)

export default Footer
