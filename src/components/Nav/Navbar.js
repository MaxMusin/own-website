import React from 'react'
import Burger from './Burger'
import styled from 'styled-components'
import { media } from '../style/mediaQueries'

import Logo from '../../assets/logo.svg'
import RightNav from './RightNav'

const Nav = styled.nav`
  width: 100%;
`

const Container = styled.div`
  max-width: 1272px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: relative;
  z-index: 40;
  width: calc(100% + 40px);
  padding: 12px 20px;
  margin: -12px -20px;
  
  ${media.sm`
    width: auto;
    padding: 0;
    margin: 0;
  `}
`


const LogoWrapper = styled.div`
  width: 58px;
  height: 59px;
  svg {
  }
`

const Navbar = ({ isHome }) => {
  return (
    <Nav>
      <Container>
        <MobileWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Burger />
        </MobileWrapper>
        <RightNav isHome={isHome}/>
      </Container>
    </Nav>
  )
}

export default Navbar
