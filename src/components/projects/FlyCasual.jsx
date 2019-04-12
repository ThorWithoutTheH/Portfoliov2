import React from "react";
import styled from "@emotion/styled";
import history from "../../history";

import Footer from '../Footer';
import Nav from '../Nav';
import Logo from '../Logo';

const WorkContainer = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 1420px; /* 2 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
`;

const ProjectsWrapper = styled.div`
  max-width: 100%;
  display: flex;
`;

const ReturnHome = styled.div`
  height: 350px;
  width: 50vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: 50vw;
  margin-right: -49vw;  
  font-family: Abel-Regular;
  font-size: 32px; 
  transition: transform 300ms ease-in-out;
  background-color: #98ffcc;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 2px #bababa;
    background-color: #ff98cb;
 }
`;

const PreviousProj = styled.div`
  height: 350px;
  width: 50vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -49vw;
  font-family: Abel-Regular;
  font-size: 32px;
  transition: transform 300ms ease-in-out;
  background-color: #98ffcc;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 2px #bababa;
    background-color: #ff98cb;
 }
`;

function redirectBackToHome() {
  history.push('/');
}

function prevProject() {
  history.push('/projects-eartrainer')
}

function FlyCasual() {
  return ( 
  <WorkContainer>
    <Nav />
    <Logo />
    <ProjectsWrapper>
		  <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
		  <ReturnHome onClick={redirectBackToHome}>Return Home</ReturnHome>
	  </ProjectsWrapper>
    <Footer />
    </WorkContainer>
  );
}

export default FlyCasual;