import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const CafeName = styled.a`
  /*border: 1px solid green; /* green*/
  text-decoration: none;
  font-size: 40px;
  padding: 0.2em 1em 0.2em 1em;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
  position: relative;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    :hover {
      color: white;
    }
  }
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
