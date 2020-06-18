import React from 'react'
import { StateProvider } from './src/context/store'
import './src/components/style/fonts.css'

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)