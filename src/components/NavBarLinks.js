import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavBarLink = styled.div`
  font-size: 30px;
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
      margin: 30px 0px 0px 0px;
      padding: 0 30px;
    }
    p {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
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
          <p>•</p>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <p>•</p>
        </li>
        <li>
          <Link to="/about">Contact</Link>
        </li>
      </ul>
    </NavBarLink>
  )
}

export default NavBarLinks
