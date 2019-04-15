import React from "react";
import styled from "@emotion/styled";
import history from '../../history';
import Footer from '../Footer';
import Nav from '../Nav';
import Logo from '../Logo';

const ProjectsContainer = styled.div`
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

const NextProj = styled.div`
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

function nextProject() {
  history.push('/projects-flycasual')
}

function prevProject() {
  history.push('/projects-bcgamejam18')
}

function EarTrainer() {
  return ( 
  <ProjectsContainer>
    <Nav />
    <Logo />
    DURH EAR TRAINER
    <ProjectsWrapper>
		  <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
		  <NextProj onClick={nextProject} >Next Project</NextProj>
	  </ProjectsWrapper>
    <Footer />
    </ProjectsContainer>
  );
}

export default EarTrainer;