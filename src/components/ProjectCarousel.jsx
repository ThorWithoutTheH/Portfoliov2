import React from "react";
import styled from "@emotion/styled";
import history from "../history";

import ProjectBattlefy from "../assets/images/ProjectBattlefy.jpg";
import ProjectGameJam18 from "../assets/images/ProjectGameJam18.jpg";
import ProjectEarTrainer from "../assets/images/ProjectEarTrainer.jpg";
import ProjectFlyCasual from "../assets/images/ProjectFlyCasual.jpg";

const ProjectCarouselWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  margin-top: 300px;
  font-family: Raleway;
  justify-content: center;
  text-align: center;
`;

const ImageWrap = styled.div`
  text-align: center;
  transition: transform 300ms ease-in-out;

  &:hover {
     box-shadow: 0 2px 2px #bababa;
    transform: translate(0px, -15px);
  }
`;

const Project1Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
`;

const TextForProject = styled.div`
  font-family: Abel-Regular;
  font-size: 22px;
  height: 30px;
`;

const Project2Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
`;

const Project3Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
`;

const Project4Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
`;

const ProjectText = styled.div`
  margin: 10px;
`;

// relocation functions

function toBattlefy() {
  history.push("/work-battlefy");
}

function toGameJam() {
  history.push("/projects-bcgamejam18");
}

function toEarTrainer() {
  history.push("/projects-eartrainer");
}

function toFlyCasual() {
  history.push("/projects-flycasual");
}

function ProjectCarousel() {
  return (
    <div>
      <Title>Projects & Featured Work</Title>
      <ProjectCarouselWrapper>
        <ImageWrap>
          <Project1Snippet src={ProjectBattlefy} onClick={toBattlefy} />
          <TextForProject>Battlefy: SSBU Open Nintendo of America</TextForProject>
        </ImageWrap>
        <ImageWrap>
          <Project2Snippet src={ProjectGameJam18} onClick={toGameJam} />
          <TextForProject>BC Game Jam 18: First Place</TextForProject>
        </ImageWrap>
        <ImageWrap>
        <Project3Snippet src={ProjectEarTrainer} onClick={toEarTrainer} />
        <TextForProject>Ear Trainer - iOS App</TextForProject>
        </ImageWrap>
        <ImageWrap>
        <Project4Snippet src={ProjectFlyCasual} onClick={toFlyCasual} />
        <TextForProject>Fly Casual - Open Source Game</TextForProject>
        </ImageWrap>
      </ProjectCarouselWrapper>
    </div>
  );
}

export default ProjectCarousel;
