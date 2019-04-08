import React from 'react';
import styled from '@emotion/styled';
import history from '../history';

import ProjectBattlefy from '../assets/images/ProjectBattlefy.jpg';
import ProjectGameJam18 from '../assets/images/ProjectGameJam18.jpg';
import ProjectEarTrainer from '../assets/images/ProjectSnippet.png';
import ProjectFlyCasual from '../assets/images/ProjectFlyCasual.jpg';

const ProjectCarouselWrapper = styled.div`
  margin-top: 300px;
`;

const Title = styled.h1`
  font-family: Raleway;
  justify-content: center;
  text-align: center;
`;

const Project1Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translate(0px, -15px)
  }
`;

const Project2Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;

  &:hover {
  transform: translate(0px, -15px)
  }
`;

const Project3Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;

  &:hover {
  transform: translate(0px, -15px)
  }
`;

const Project4Snippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;

  &:hover {
  transform: translate(0px, -15px)
  }
`;

const ProjectText = styled.div`

  margin: 10px;

`;

// relocation functions

function toBattlefy() {
  history.push('/work-battlefy');
}

function toGameJam() {
  history.push('/projects-bcgamejam18');
}

function toEarTrainer() {
  history.push('/projects-eartrainer');
}

function toFlyCasual() {
  history.push('/projects-flycasual');
}

function ProjectCarousel() {

  return (
    <ProjectCarouselWrapper>
      <Title>Projects & Featured Work</Title>
      <Project1Snippet src={ProjectBattlefy} onClick={toBattlefy}/> 
      <Project2Snippet src={ProjectGameJam18} onClick={toGameJam}/>
      <Project3Snippet src={ProjectEarTrainer} onClick={toEarTrainer}/>
      <Project4Snippet src={ProjectFlyCasual} onClick={toFlyCasual}/>
    </ProjectCarouselWrapper>
  )
}

export default ProjectCarousel; 