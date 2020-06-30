import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

const CafeName = styled.div`
  text-decoration: none;
  font-size: 40px;
  padding: 0.2em 4em 0.2em 1em;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  position: relative;
  cursor: pointer;
`
const Logo = ({ children }) => {
  return (
    <LogoWrapper>
      <CafeName>
        <Link to="/about">{children}</Link>
      </CafeName>
    </LogoWrapper>
  )
}

export default Logo
