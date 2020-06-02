import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, lineHeight, separator } from "./style/Mixin";
import { media } from "./style/mediaQueries";

const ButtonWrap = styled.button`
  ${fontSize(16)};
  font-weight: normal;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  font-family: ${props => props.theme.font.primary};
  border: none;
  background: transparent;
  width: auto;
  display: inline-flex;
  color: white;
  background: red;
  // gradient

  &:focus,
  &:hover {
    box-shadow: none !important;
    color: white !important;
  }
`;

export default class Button extends React.Component {
  static propTypes = {
    separator: PropTypes.bool,
    linkStyle: PropTypes.bool,
    hasIcon: PropTypes.bool,
    children: PropTypes.node
  };

  render() {
    const {
      children
    } = this.props;
    return (
      <ButtonWrap>
        {children}
      </ButtonWrap>
    );
  }
}
