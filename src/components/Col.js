import React from 'react'
import styled from 'styled-components'
import { media } from './style/mediaQueries'
import { Width } from './style/Mixin'

const ColWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 16px;
  ${media.sm`
        flex: 0 0 ${(props) => Width[props.col]};
        max-width: ${(props) => Width[props.col]};
        margin-left: ${(props) => Width[props.offset]};
  `}
`

class Col extends React.Component {
  static defaultProps = {
    col: 12,
    offset: 0
  }

  render() {
    const { col, offset, children, className } = this.props
    return <ColWrapper className={className} col={col} offset={offset}>{children}</ColWrapper>
  }
}

export default Col
