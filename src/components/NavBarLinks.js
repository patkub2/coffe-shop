import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavBarLink = styled.div`
  height: 100%;
  font-size: 1.8em;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    padding-right: 1.9em;
  }
  li {
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem 2rem;
    }
    a1 {
      font-size: 1.6em;
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      user-select: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`

const NavBarLinks = ({ isOpen }) => {
  return (
    <NavBarLink isOpen={isOpen}>
      <ul>
        <li>
          <Link to="/coffe">Coffe</Link>
        </li>
        <li>
          <a1>•</a1>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <a1>•</a1>
        </li>
        <li>
          <Link to="/about">Contact</Link>
        </li>
      </ul>
    </NavBarLink>
  )
}

export default NavBarLinks
