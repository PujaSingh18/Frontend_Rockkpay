import React from 'react'
import MainComponent from './MainComponent'
import { ThemeProvider } from './ThemeContext'

export default function ThemeMain() {
  return (
    <ThemeProvider>
    <MainComponent/>
    </ThemeProvider>
  )
};