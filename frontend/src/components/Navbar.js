import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Wrapper>
      <Link to={"/"} className="navbar-link">
        Home
      </Link>
      <Link to={"/about/"} className="navbar-link">
        About
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  border: 1px solid;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-link {
    margin-right: 1rem;
  }
`;

export default Navbar;
