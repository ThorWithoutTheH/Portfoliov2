import React from "react";
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

const EarTrainerScreen = styled.div`
  width: 100vw;
  height: 600px;
  background-size: contain;
  margin-bottom: 1.5em;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376360/Portfolio/ProjectEarTrainer_kyx3mr.jpg")
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
  history.push("/projects-flycasual");
}

function prevProject() {
  history.push("/projects-bcgamejam18");
}

function EarTrainer() {
  return (
    <ProjectsContainer>
      <ProjectNav />
      <Logo />
      <ProjectTitleAndAboutWrapper>
        <HeaderStyled>
          <ProjectTitle>Ear Trainer - iOS Project</ProjectTitle>
          <ProjectAboutBold>
            An app designed to help musicians train their ears, by identifying
            the notes played over a thirty second period.
          </ProjectAboutBold>
        </HeaderStyled>
      </ProjectTitleAndAboutWrapper>
      <EarTrainerScreen />
      <ProjectDetailsWrapper>
        <ProjectTitle>Ear Trainer</ProjectTitle>
        <ProjectDetails>
          Combining my two passions of coding and music, I created Ear Trainer
          using Swift. Originally started as a school project for an iOS course,
          my peers encouraged me to continue developing Ear Trainer.{" "}
        </ProjectDetails>
        <ProjectDetails>
          There is currently only one key available, however 'C' is the first
          note of all white-key major scales and has the most practicality.{" "}
        </ProjectDetails>
        <ProjectDetails>
          Users have thirty seconds to identify as many notes as possible, each
          note or interval is played audibly so headphones or sound is required.
          Points are awarded based on the amount of tries and time per note, and
          the scores can be shared via social media.{" "}
        </ProjectDetails>
        <LinkToDevPost href="https://github.com/ThorWithoutTheH/EarTrainer">
          Link to code.
        </LinkToDevPost>
      </ProjectDetailsWrapper>
      <ProjectsWrapper>
        <PreviousProj onClick={prevProject}>Previous Project</PreviousProj>
        <NextProj onClick={nextProject}>Next Project</NextProj>
      </ProjectsWrapper>
      <Footer />
    </ProjectsContainer>
  );
}

export default EarTrainer;
