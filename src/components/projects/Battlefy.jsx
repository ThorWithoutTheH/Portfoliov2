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

const SmashPortalScreen = styled.div`
  width: 100vw;
  height: 500px;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376375/Portfolio/BfProject_t5noz5.jpg")
    no-repeat center;
  background-size: contain;
  margin-bottom: 1.5em;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const SmashSignup = styled.div`
  width: 100vw;
  height: 500px;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376376/Portfolio/BfSignUp_wbucfm.jpg")
    no-repeat center;
  background-size: contain;
  margin-bottom: 1.5em;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const SmashMobile = styled.div`
  width: 100vw;
  height: 500px;
  background: url("https://res.cloudinary.com/dw110cbuf/image/upload/v1555376370/Portfolio/SmashMobile_ojvqzh.jpg")
    no-repeat center;
  background-size: contain;
  margin-bottom: 1.5em;
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
  history.push("/");
}

function toNextProj() {
  history.push("/projects-bcgamejam18");
}

// TODO: Nav needs different functionality in projects
function Battlefy() {
  return (
    <ProjectsContainer>
      <ProjectNav />

      <Logo />

      <ProjectTitleAndAboutWrapper>
        <HeaderStyled>
          <ProjectTitle>
            Super Smash Brothers Ultimate. Powered by Battlefy
          </ProjectTitle>
          <ProjectAboutBold>
            The largest Super Smash Bros tournament to date, with over 10,000
            entrants. The finalists were invited to PAX East by Nintendo.{" "}
          </ProjectAboutBold>
        </HeaderStyled>
      </ProjectTitleAndAboutWrapper>

      <SmashPortalScreen />

      <ProjectDetailsWrapper>
        <ProjectTitle>Battlefy Goals</ProjectTitle>
        <ProjectDetails>
          At Battlefy my role ran the spectrum from solving UX problems, and
          full stack engineering. All of that work is aimed at improving the
          tournament experience for our users while keeping our KPI's in mind.
        </ProjectDetails>
        <Bullets>
          <ProjectBullet>
            Help grow and cement the future of esports.
          </ProjectBullet>
          <ProjectBullet>
            Create the best possible platform for organizers and ssers.
          </ProjectBullet>
          <ProjectBullet>
            Develop and productise features for Battlefy.com.
          </ProjectBullet>
          <ProjectBullet>
            Work with developers to create amazing tournaments.
          </ProjectBullet>
        </Bullets>
      </ProjectDetailsWrapper>

      <SmashSignup />

      <ProjectDetailsWrapper>
        <ProjectDetails>
          Portals are one of the most common entry points for users, and our
          team really wanted to impress with this portal. The ability for our
          users to find, and understand the rules and sign up process is
          critical. The Smash Bros Portal was unique due to the volume of
          regional sign ups we had to handle. Our team did a fantastic job
          showing the different regions and dates.{" "}
        </ProjectDetails>
        <LinkToBattlefy href="https://www.battlefy.com/supersmashbros2019">
          Battlefy Super Smash Bros 2019 Portal
        </LinkToBattlefy>
      </ProjectDetailsWrapper>

      <SmashMobile />

      <ProjectDetailsWrapper>
        <ProjectDetails>
          I was very fortunate to get to work with such an amazingly skilled
          team, with some solid leaders. The technologies used on the portal
          included: Node, React & MongoDB. My specific contributions included{" "}
        </ProjectDetails>
        <Bullets>
          <ProjectBullet>
            Incorporation of custom ruleset to Battlefy.com for all Super Smash
            Games.
          </ProjectBullet>
          <ProjectBullet>Mobile Navigation (Pictured Above).</ProjectBullet>
          <ProjectBullet>
            Portal QA, mobile responsiveness and bug fixes.
          </ProjectBullet>
        </Bullets>
      </ProjectDetailsWrapper>

      <ProjectsWrapper>
        <PreviousProj onClick={redirectBackToHome}>Return Home</PreviousProj>
        <NextProj onClick={toNextProj}>Next Project</NextProj>
      </ProjectsWrapper>
      <Footer />
    </ProjectsContainer>
  );
}

export default Battlefy;
