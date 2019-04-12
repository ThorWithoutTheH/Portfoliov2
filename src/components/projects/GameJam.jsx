import React from "react";
import styled from "@emotion/styled";
import history from '../../history';
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

const ProjectTitleAndAboutWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  margin-bottom: 3em;
`;

const ProjectTitle = styled.h1`
  font-family: Abel-Regular;
  font-size: 22px;
  letter-spacing: 3px;

`;

const ProjectAboutBold = styled.h2`
  font-family: Raleway;


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
  history.push('/projects-eartrainer')
}

function prevProject() {
  history.push('/work-battlefy')
}

function GameJam() {
  return ( 
  <WorkContainer>
    <Nav />
    <Logo />
    <ProjectTitleAndAboutWrapper>
      <ProjectTitle>BC Game Jam 18 - Scalier.</ProjectTitle>
      <ProjectAboutBold>The largest annual game jam in BC. Our project won *LINK HERE TO FIRST PLACE FROM DEVPOST* </ProjectAboutBold>
    </ProjectTitleAndAboutWrapper>
    <ProjectsWrapper>
		  <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
		  <NextProj onClick={nextProject}>Next Project</NextProj>
	  </ProjectsWrapper>
    <Footer />
    </WorkContainer>
  );
}

export default GameJam;