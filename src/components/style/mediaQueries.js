import {css} from 'styled-components';

export const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1272

};

export const gridMaxWidths = {
  sm: '720px',
  lg: '1240px'
};

/*
const gutters = {
    xs: 8,
    sm: 8,
    md: 16,
    lg: 16
};

const updateDimensions = () => {
    if (window.innerWidth < breakpoints.sm) {
        return gutters.xs;
    } else if (window.innerWidth < breakpoints.md) {
        return gutters.sm;
    } else if (window.innerWidth < breakpoints.lg) {
        return gutters.md;
    } else {
        return gutters.lg;
    }
};
*/

// export const gridGutter = window.onresize = () => {return updateDimensions()};
export const gridGutter = 8;


export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc;
}, {});
