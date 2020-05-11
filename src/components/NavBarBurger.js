import React, { useState } from "react"
import styled from "styled-components"

const NavBarLink = styled.div`
  display: none;
  height: 100%;
  font-size: 1.5em;
  background-color: ${({ theme }) => theme.colors.dark};
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem;
    }
    :hover {
      background-color: #555;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    transition: transform 0.3s ease-in-out;
    transform: ${props =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    width: 100%;
    ul {
      width: 100%;
      flex-direction: column;
    }
    ul li {
      text-align: center;
    }
    ul li a {
      padding: 0.5rem 1rem;
    }
  }
`

const NavBarLinks = ({ isOpen }) => {
  return (
    <NavBarLink isOpen={isOpen}>
      <ul>
        <li>
          <a href="#" tabIndex="-1">
            Coffe
          </a>
        </li>
        <hr></hr>
        <li>
          <a href="#" tabIndex="-1">
            Food
          </a>
        </li>
        <hr></hr>
        <li>
          <a href="#" tabIndex="-1">
            Contact
          </a>
        </li>
      </ul>
    </NavBarLink>
  )
}

export default NavBarLinks
