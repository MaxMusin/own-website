import React from 'react'
import styled from 'styled-components'

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-left: -20px;
`

const Row = ({children, className}) => (
  <RowWrapper className={className}>
    {children}
  </RowWrapper>
)

export default Row