import React from "react";
import styled from "@emotion/styled";
import history from "../history";

const Logo = styled.div`
  height: 240px;
  width: 200px;
  cursor: pointer;
  background-image: url('https://res.cloudinary.com/dw110cbuf/image/upload/v1555376356/Portfolio/Original-on-Transparent_mtfclp.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin: 30px;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translate(10px, 15px);
  }
`;

function redirectBackToHome() {
  history.push("/");
}

function MyLogo() {
  return <Logo onClick={redirectBackToHome} />;
}

export default MyLogo;
