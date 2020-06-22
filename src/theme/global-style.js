import { createGlobalStyle } from "styled-components"
import { reset } from 'styled-reset'

const colors = {
  white: '#FFFFFF',
  black: '#2A2A2A',
  darkBlue: '#383D59',
  babyBlue: '#47CDE2',
}

export const defaultTheme = {
  font: {
    primary: '"aaux_nextmedium", sans-serif',
    secondary: '"aaux_nextsemibold", sans-serif',
    tertiary: '"aaux_nextbold", sans-serif',
  },
  color: {
    primary: colors.babyBlue,
    text: {
      primary: colors.darkBlue,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: 'aaux_nextmedium', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, 
  ::after, ::before {
    box-sizing: border-box;
  }
  
  ::selection {
    color: #fff !important;
    background: #e35d5b;
  }
  
  ::-moz-selection {
    color: #fff !important;
    background: #e35d5b;
  }
  
  ::-webkit-selection {
    color: #fff !important;
    background: #e35d5b;
  }
`