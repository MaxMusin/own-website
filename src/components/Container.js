import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  max-width: ${(props) => props.width}px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

const Container = ({children, width}) => (
  <ContainerWrapper width={width}>{children}</ContainerWrapper>
)

export default Container