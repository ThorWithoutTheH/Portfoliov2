import React, { Fragment } from "react";
import styled from "@emotion/styled";
import history from "../../history";
import Footer from "../Footer";
import ProjectNav from "./ProjectNav";
import Logo from "../Logo";

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

const ScalierScreen = styled.div`
  width: 100vw;
  height: 600px;
  background-size: contain;
  margin-bottom: 1.5em;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376368/Portfolio/Scalier_cndjzc.jpg")
    no-repeat center;

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
  history.push("/projects-eartrainer");
}

function prevProject() {
  history.push("/work-battlefy");
}

function GameJam() {
  return (
    <ProjectsContainer>
      <ProjectNav />
      <Logo />
      <ProjectTitleAndAboutWrapper>
        <HeaderStyled>
          <ProjectTitle>BC Game Jam 2018 - Scalier</ProjectTitle>
          <ProjectAboutBold>
            The largest annual game jam in BC each year, hosted by game
            development clubs from BCIT, UBC and Simon Fraser University and
            sponsored by local game companies.{" "}
          </ProjectAboutBold>
        </HeaderStyled>
      </ProjectTitleAndAboutWrapper>
      {window.innerWidth >= 760 ? <ScalierScreen /> : <Fragment />}
      <ProjectDetailsWrapper>
        <ProjectTitle>Scalier</ProjectTitle>
        <ProjectDetails>
          A game jam is an event where game enthusiasts come together and create
          a game based on a theme that has been given by the organizers. Our
          game Scalier - a puzzle platformer set in a lucid dream, won the first
          place prize from East Side Games for their theme 'weird'.
        </ProjectDetails>
        <LinkToDevPost href="https://devpost.com/software/scalier">
          Download & try the game for yourself or check out our code.
        </LinkToDevPost>
      </ProjectDetailsWrapper>
      <ProjectDetailsWrapper>
        <ProjectDetails>
          72 hour project created by two classmates and myself using Game Maker
          Studio 2 (GMS2). We chose GMS2 because it provided an easy way for
          three programmers to create animations and sprites, while also being a
          great foundation for 2D platformers & physics. My contributions to the
          game for this project were:{" "}
        </ProjectDetails>
        <Bullets>
          <ProjectBullet>Animations & Sprites.</ProjectBullet>
          <ProjectBullet>
            In game mechanics such as jumping, walking, enemy AI, waypoints.
          </ProjectBullet>
          <ProjectBullet>Level design and asset creation.</ProjectBullet>
          <ProjectBullet>Game narrative and story.</ProjectBullet>
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
