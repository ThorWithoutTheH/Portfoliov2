import React, { Component } from "react";
import styled from "@emotion/styled";

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
  window.scrollTo({ top: 750, left: 0, behaviour: "smooth" });
}

class Nav extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <div>
        {window.innerWidth >= 760 ? (
          <NavbarWrapper>
            <StyledNavLink onClick={scrollToWork}>Work</StyledNavLink>
            <StyledNavLink onClick={scrollToBottom}>Contact</StyledNavLink>
          </NavbarWrapper>
        ) : (
          <NavbarWrapper>
            <StyledNavLink onClick={scrollToBottom}>Contact</StyledNavLink>
          </NavbarWrapper>
        )}
      </div>
    );
  }
}

export default Nav;
