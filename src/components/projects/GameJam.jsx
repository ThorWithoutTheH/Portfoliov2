import React from "react";
import styled from "@emotion/styled";
import history from '../../history';
import Footer from '../Footer';
import Nav from '../Nav';
import Logo from '../Logo';
import Scalier from '../../assets/images/Scalier.jpg';

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
  align-items: center;
`;

const HeaderStyled = styled.header`
  margin: auto 5% auto 0;
  max-width: 820px;
`;

const ProjectTitle = styled.h1`
  font-family: Abel-Regular;
  font-size: 32px;
  letter-spacing: 3px;

`;

const ProjectAboutBold = styled.h2`
  font-family: Abel-Regular;
  letter-spacing: -1px;

`;

const ScalierScreen = styled.div`
  width: 100vw;
  height: 600px;
  background-size: contain;
  margin-bottom: 1.5em;
  background: url(${Scalier}) no-repeat center;

  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;  
`; 

const ProjectDetails = styled.p`
  font-family: Raleway;
  width: 50%;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const Bullets = styled.ul`
  font-size: 1.1rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ProjectBullet = styled.li`
  font-family: Raleway;
  margin-bottom: 1em;
  line-height: 1.6;
  
`;

const LinkToDevPost = styled.a`
  font-family: Raleway; 
  align-items: center;
  color: #ff98cb;
  text-decoration: none;

  &:hover {
    color: #decafe;
 }
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

function nextProject() {
  history.push('/projects-eartrainer')
}

function prevProject() {
  history.push('/work-battlefy')
}

function GameJam() {
  return ( 
  <ProjectsContainer>
    <Nav />
    <Logo />

    <ProjectTitleAndAboutWrapper>
      <HeaderStyled>
        <ProjectTitle>BC Game Jam 2018 - Scalier</ProjectTitle>
        <ProjectAboutBold>The largest annual game jam in BC each year, hosted by game development clubs from BCIT, UBC and Simon Fraser University and sponsored by local game companies.  </ProjectAboutBold>
      </HeaderStyled>
    </ProjectTitleAndAboutWrapper>

    <ScalierScreen />

    <ProjectDetailsWrapper>
      <ProjectTitle>Scalier</ProjectTitle>
      <ProjectDetails>Portals are one of the most common entry points for users, and our team really wanted to impress with this portal. The ability for our users to find, and understand the rules and sign up process is critical. The Smash Bros Portal was unique due to the volume of regional sign ups we had to handle. Our team did a fantastic job showing the different regions and dates. </ProjectDetails>
      <LinkToDevPost href='https://devpost.com/software/scalier'>If you want to try the game for yourself.</LinkToDevPost>
    </ProjectDetailsWrapper>

    <ProjectDetailsWrapper>
      <ProjectDetails>72 hour project created by two classmates and myself using Game Maker Studio 2.  </ProjectDetails>
      <Bullets>
        <ProjectBullet>Help grow and cement the future of esports.</ProjectBullet>
        <ProjectBullet>Create the best possible platform for organizers and ssers.</ProjectBullet>
        <ProjectBullet>Develop and productise features for Battlefy.com.</ProjectBullet>
        <ProjectBullet>Work with developers to create amazing tournaments.</ProjectBullet>
      </Bullets>
    </ProjectDetailsWrapper>


    <ProjectsWrapper>
		  <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
		  <NextProj onClick={nextProject}>Next Project</NextProj>
	  </ProjectsWrapper>
    <Footer />
    </ProjectsContainer>
  );
}

export default GameJam;