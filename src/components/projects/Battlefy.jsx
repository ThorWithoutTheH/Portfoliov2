import React from "react";
import styled from "@emotion/styled";
import history from '../../history';
import Footer from '../Footer';
import Nav from '../Nav';
import Logo from '../Logo';
import BfProject from '../../assets/images/BfProject.jpg';

const ProjectsContainer = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 1420px; /* 2 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
  disply: flex;
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

const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 90%;
  background-position: 50%;
  margin-bottom: 3em;

`;

const HeaderStyled = styled.header`
  margin: auto 5% auto 0;
  max-width: 640px;
`;

const ProjectTitle = styled.h1`
  font-family: Abel-Regular;
  font-size: 22px;
  letter-spacing: 3px;

`;

const ProjectAboutBold = styled.h2`
  font-family: Abel-Regular;
  letter-spacing: -1px;

`;

const SmashPortalScreen = styled.div`
  width: 100vw;
  height: 500px;
  background: url(${BfProject}) no-repeat center;
  background-size: contain;
  margin-bottom: 1.5em;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;  
`;  
// TODO: Add Another Screenshot of the different regions
const SmashRegionScreen = styled.div`




`;

const ProjectDetails = styled.p`
  font-family: Raleway;
  width: 50%;

`;

const Bullets = styled.ul`
`;

const ProjectBullet = styled.li`
  font-family: Raleway;
  width: 50%; 
`;

const LinkToBattlefy = styled.a`



`;

// Navigating Projects
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


function redirectBackToHome() {
  history.push('/');
}

function toNextProj() {
  history.push('/projects-bcgamejam18') 
}

// TODO: Nav needs different functionality in projects 
function Battlefy() {
  return ( 
  <ProjectsContainer>
    <Nav />
    
    <Logo />

    <ProjectTitleAndAboutWrapper>
      <HeaderStyled>
        <ProjectTitle>Super Smash Brothers Ultimate. Powered by Battlefy</ProjectTitle>
        <ProjectAboutBold>The largest Super Smash Bros tournament to date, with over 10000 entrants. The finalist were invited to PAX East. </ProjectAboutBold>
      </HeaderStyled>
    </ProjectTitleAndAboutWrapper>

    <SmashPortalScreen />

    <ProjectDetailsWrapper>
      <ProjectTitle>Battlefy Goals</ProjectTitle>
      <ProjectDetails>At Battlefy my role ran the spectrum from solving UX problems, and full stack engineering. All of that work is aimed at improving the tournament experience for our users while keeping our KPI's in mind.</ProjectDetails>
      <Bullets>
        <ProjectBullet>Help grow and cement the future of esports.</ProjectBullet>
        <ProjectBullet>Create the best possible platform for organizers and ssers.</ProjectBullet>
        <ProjectBullet>Develop and productise features for Battlefy.com.</ProjectBullet>
        <ProjectBullet>Work with developers to create amazing tournaments.</ProjectBullet>
      </Bullets>
    </ProjectDetailsWrapper>

    <SmashPortalScreen />

    <ProjectDetailsWrapper>
      <ProjectDetails>Portals are one of the most common entry points for our users. </ProjectDetails>
    </ProjectDetailsWrapper>

    <LinkToBattlefy>Battlefy Super Smash Bros 2019 Portal</LinkToBattlefy>
    
    <ProjectsWrapper>
		  <PreviousProj onClick={redirectBackToHome}>Return Home</PreviousProj>
		  <NextProj onClick={toNextProj} >Next Project</NextProj>
	  </ProjectsWrapper>
    <Footer />
    </ProjectsContainer>
  );
}

export default Battlefy;
