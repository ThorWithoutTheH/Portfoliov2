import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import history from "../../history";

const NavbarWrapper = styled.div`
  overflow: hidden;
  float: right;
  margin-top: 65px;
`;

const StyledNavLink = styled.a`
  margin: 40px;
  font-family: Raleway;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    transform: translate(5px, 5px);
    color: #e31b6d;
  }
`;

function scrollToBottom() {
  window.scrollTo({ top: 4000, left: 0, behaviour: "smooth" });
}

function scrollToWork() {
  history.push("/");
}

class Nav extends Component {
  render() {
    return (
      <Fragment>
        {window.innerWidth >= 760 ? (
          <NavbarWrapper>
            <StyledNavLink onClick={scrollToWork}>Home</StyledNavLink>
            <StyledNavLink onClick={scrollToBottom}>Contact</StyledNavLink>
          </NavbarWrapper>
        ) : (
          <NavbarWrapper>
            <StyledNavLink onClick={scrollToBottom}>Contact</StyledNavLink>
          </NavbarWrapper>
        )}
      </Fragment>
    );
  }
}

export default Nav;
