import React from "react"
import Layout from "../layout/Layout"
import "../utils/in.css"
import styled from "styled-components"
import useToggler from "./useToggler"
import NavBarLinks from "./NavBarLinks"
import NavBarBurger from "./NavBarBurger"
import Logo from "./Logo"

const NavBar = styled.nav`
  overflow-x: hidden;
  display: flex;
  position: relative;
  min-height: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ToggleButton = styled.a`
  position: absolute;
  top: 1.4rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  span {
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
  }
  @media (max-width: 800px) {
    display: flex;
  }
`
const NavBarr = styled.nav`
  overflow-x: hidden;
`

const Navigation = () => {
  const [show, toggle] = useToggler(false)
  return (
    <Layout>
      <NavBarr>
        <NavBar>
          <Logo>Coffe Republic</Logo>

          <ToggleButton onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </ToggleButton>
          <NavBarLinks isOpen={show} />
        </NavBar>
        <NavBarBurger isOpen={show} />
      </NavBarr>
    </Layout>
  )
}

export default Navigation
