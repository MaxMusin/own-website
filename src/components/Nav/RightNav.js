import React, { useContext, useEffect } from 'react'
import loadable from '@loadable/component'
const Scroll = loadable(() => import('react-scroll-to-element'))
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { media } from '../style/mediaQueries'
import { store } from '../../context/store.js'
import debounce from 'lodash.debounce'

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 83px 8px 60px;
  transition: transform 0.3s ease-in-out;
  z-index: 30;
  position: absolute;
  box-shadow: 0 4px 15px 0 rgba(0,0,0,0.09);

  ${media.sm`
    position: relative;
    flex-flow: row nowrap;
    width: auto;
    padding: 0;
    transform: none;
    box-shadow: none;
  `}

  li {
    text-align: center;
    a {
      display: block;
      padding: 12px;
      text-align: center;
      font-family: ${(props) => props.theme.font.primary};
      font-size: 16px;
      color: #7a6d6d;
      letter-spacing: 1.4px;
      position: relative;
      cursor: pointer;
      text-decoration: none;
      
      ${media.sm`
        display: inline-block;
      `}
    }

    &:last-child {
      a {
        color: #e35d5b;
        border: 1px #e35d5b solid;
        border-radius: 5px;
        margin-top: 12px;
        display: inline-block;

        ${media.sm`
          margin-top: 0;
          margin-left: 12px;
        `}
      }
    }
  }
`

const RightNav = ({ isHome }) => {
  const globalState = useContext(store)
  const { isOpen } = globalState.state

  const menuItems = {
    about: 'About',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact me',
  }

  const handleClick = () => {
    globalState.dispatch({ type: 'IS_OPEN' })
  }

  const handleScroll = debounce(() => {
    globalState.dispatch({ type: 'IS_OPEN', value: false })
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });


  const menuList = Object.keys(menuItems).map((e, i) => {
    if (isHome) {
      return (
        <li key={`menuitem_${i}`}>
          <a onClick={handleClick}>
            <Scroll type="id" element={e}>
              {menuItems[e]}
            </Scroll>
          </a>
        </li>
      )
    } else {
      return (
        <li key={`menuitem_${i}`}>
          <AniLink
            cover
            to={`/#${e}`}
            direction="right"
            bg="#E53935"
            onClick={handleClick}
          >
            {menuItems[e]}
          </AniLink>
        </li>
      )
    }
  })

  return <MenuList open={isOpen}>{menuList}</MenuList>
}

export default RightNav
