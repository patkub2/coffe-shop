import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MainWraper = styled.div`
  /*border: 1px solid red;*/
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  font-family: Lobster;
  height: 65vh;
  @media (max-width: 1300px) {
    height: 70vh;
  }
  @media (max-width: 800px) {
    height: 40vh;
    justify-content: center;
    align-items: center;
  }
`

const TextBox = styled.div`
  display: flex;
  font-family: Lobster;
  flex-flow: column wrap;
  justify-content: flex-end;
  a {
    font-size: 4em;
    line-height: 1.2em;
    color: #f0e6d7;
    margin: 0em 10%;
    @media (max-width: 1300px) {
      margin: 0px 1em;
      font-size: 3.5em;
    }
    @media (max-width: 800px) {
      margin: 0px 1em;
      font-size: 2.5em;
    }
  }
`
const Button = styled.button`
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid #f0e6d7;
  cursor: pointer;
  color: #f0e6d7;
  font-size: 2em;
  font-family: Lobster;
  padding: 10px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #f0e6d7;
  display: block;
  margin: 1em 24em;
  width: 7em;
  :hover {
    position: relative;
    top: 2px;
  }
  :active {
    position: relative;
    top: 1px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 1000px) {
    margin: 2em 4em;
    width: 9em;
    font-size: 1.2em;
  }
`

const Main = () => {
  return (
    <MainWraper>
      <TextBox>
        <a>Perfect coffee does not</a>
        <a> exist but we are sure close</a>
      </TextBox>
      <Button>
        <Link to="/about">Check out</Link>
      </Button>
    </MainWraper>
  )
}

export default Main
