import React, { useContext } from 'react'
import { store } from '../context/store.js'
import styled from 'styled-components'

const MenuTrigger = styled.div`
  ${props => {
    if (props.isOpen) {
      return `overflow: hidden;
                  width: 100vw;
                  height: 100vh;`
    }
  }}
`



const Wrapper = ({children}) => {
  const globalState = useContext(store)
  const { isOpen } = globalState.state

  return (
    <MenuTrigger isOpen={isOpen}>{children}</MenuTrigger>
  )
}

export default Wrapper