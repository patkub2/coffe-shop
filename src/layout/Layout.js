import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import bar1 from "../images/bar1.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    height:100vh;
    color: #f0e6d7;
  font-family: Lobster;
  margin: 0;
  padding: 0;
  background-image: url(${bar1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  position: relative;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout
