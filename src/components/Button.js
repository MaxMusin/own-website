import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, lineHeight } from "./style/Mixin";
import { media } from "./style/mediaQueries";

const ButtonWrap = styled.button`
  ${fontSize(16)};
  ${lineHeight(15)};
  font-weight: normal;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  font-family: ${props => props.theme.font.primary};
  border: none;
  background-image: linear-gradient(90deg, #E35D5B 0%, #E53935 100%);
  width: auto;
  display: inline-flex;
  color: white;
  padding: 10px 20px 11px;
  letter-spacing: 1.4px;

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
