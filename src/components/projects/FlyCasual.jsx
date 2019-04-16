import React from "react";
import styled from "@emotion/styled";
import history from "../../history";
import Footer from '../Footer';
import ProjectNav from './ProjectNav';
import Logo from '../Logo';

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

const FlyCasualImage = styled.div`
  width: 100vw;
  height: 600px;
  background-size: contain;
  margin-bottom: 1.5em;
  background: url('https://res.cloudinary.com/dw110cbuf/image/upload/v1555376380/Portfolio/FlyCasualScreen_qkijis.jpg') no-repeat center;

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

const LinkToBattlefy = styled.a`
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
  history.push('/projects-eartrainer');
}

function FlyCasual() {
  return ( 
    <ProjectsContainer>
    <ProjectNav />
    
    <Logo />

    <ProjectTitleAndAboutWrapper>
      <HeaderStyled>
        <ProjectTitle>Fly Casual</ProjectTitle>
        <ProjectAboutBold>Community driven open source Unity 3D project for Star Wars X-Wing TMG</ProjectAboutBold>
      </HeaderStyled>
    </ProjectTitleAndAboutWrapper>
    <FlyCasualImage />
    <ProjectDetailsWrapper>
      <ProjectTitle>Fly Casual</ProjectTitle>
      <ProjectDetails>Fly Casual is a fan-made <LinkToBattlefy href='https://www.fantasyflightgames.com/en/products/x-wing/' >"Star Wars: X-Wing Miniatures Game"</LinkToBattlefy> simulator, built using Unity 3D (C#). Available platforms: Windows, Mac, Linux, Android with 3D (2D mode is supported). When I first began contributing to the project, there were only a dozen or so passionate developers. The project has grown in popularity, size and scale and is now transitioning to X-Wing 2.0.    </ProjectDetails>
      <ProjectDetails>With Fly Casual my contributions have been all gameplay or mechanics related in the 1.0 version of the game. My contributions to the game included incorporating pilot abilities, bombs, and special weapons in to the game. To name a few I was responsible for Quickdraw, Ion-Bombs & Heavy Laser Cannon integrations amongst others. </ProjectDetails>
    <ProjectDetails>Relevant links for more information, download or support: </ProjectDetails>
      <Bullets>
        <ProjectBullet><LinkToBattlefy href='https://github.com/Sandrem/FlyCasual/releases'>Download</LinkToBattlefy></ProjectBullet>
        <ProjectBullet><LinkToBattlefy href='https://www.youtube.com/channel/UCr1mWwQIDZ_CbE6a9iol24A/videos'>Youtube channel</LinkToBattlefy></ProjectBullet>
        <ProjectBullet><LinkToBattlefy href='https://discordapp.com/invite/23GGua3'>Discord channel</LinkToBattlefy></ProjectBullet>
        <ProjectBullet><LinkToBattlefy  href='https://community.fantasyflightgames.com/topic/267459-fly-casual-x-wing-simulator/'>Topic on FFG forum</LinkToBattlefy></ProjectBullet>
      </Bullets>
    </ProjectDetailsWrapper>
    <ProjectsWrapper>
		  <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
		  <ReturnHome onClick={redirectBackToHome}>Return Home</ReturnHome>
	  </ProjectsWrapper>
    <Footer />
    </ProjectsContainer>
  );
}

export default FlyCasual;