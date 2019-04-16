import React, { Component } from "react";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Logo from "./Logo";
import About from "./About";
import ProjectCarousel from "./ProjectCarousel";
import Nav from "./Nav";

const AppWrapper = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 1420px; /* 2 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
`;

const EmployerContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CurrentlyDiv = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Abel-Regular;
  max-width: 50%;
  order: 0;
`;

const PreviousDiv = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Abel-Regular;
  order: 2;
`;

const MyLogo = styled.div`
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
  width: 120px;
  height: 100px;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376354/Portfolio/Grayscale-on-Transparent_fqejba.png")
    no-repeat center;
  background-size: contain;
  order: 1;

  transition: transform 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: translate(0, -10px);
  }
`;

const BattlefyLogo = styled.div`
  cursor: pointer;
  max-width: 100%;
  width: 250px;
  height: 100px;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376372/Portfolio/bflogo_iyvopz.png")
    no-repeat center;
  background-size: contain;
  order: 4;

  transition: transform 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: translate(0, -10px);
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  scrollToBottom() {
    window.scrollTo({ top: 3500, left: 0, behaviour: "smooth" });
  }
  toBattlefy() {
    window.location = "https://battlefy.com/";
  }

  render() {
    return (
      <AppWrapper>
        <Nav />
        <Logo />
        <About />
        <EmployerContainer>
          <CurrentlyDiv>Currently:</CurrentlyDiv>
          <MyLogo onClick={this.scrollToBottom} />
          <PreviousDiv>Previously:</PreviousDiv>
          <BattlefyLogo onClick={this.toBattlefy} />
        </EmployerContainer>
        <ProjectCarousel />
        <Footer />
      </AppWrapper>
    );
  }
}

export default Home;
