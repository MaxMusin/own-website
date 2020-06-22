import React, { useState, Fragment, useContext } from 'react'
import styled from 'styled-components'
import { media } from '../style/mediaQueries'
import { store } from '../../context/store.js'

const StyledBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 36px;
  height: 36px;
  position: relative;
  z-index: 999;
  
  ${media.sm`
    display: none;
  `}
  
  div {
    width: 36px;
    height: 3px;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Burger = () => {
  const globalState = useContext(store);
  const { isOpen } = globalState.state;
  return (
    <>
      <StyledBurger open={isOpen} onClick={() => globalState.dispatch({type: 'IS_OPEN'})}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
};

export default Burger;