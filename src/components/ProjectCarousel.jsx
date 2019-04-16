import React, { Component } from "react";
import styled from "@emotion/styled";
import history from "../history";

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
    transform: translate(0px, -5px);
  }
`;

const ProjectSnippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
`;

const MobileSnippet = styled.img`
  margin: 15px;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
  height: 300px;
  width: 300px;
  align-items: center;
`;

const TextForProject = styled.div`
  font-family: Abel-Regular;
  font-size: 22px;
  height: 30px;
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

class ProjectCarousel extends Component {
  render() {
    return (
      <div>
        <Title>Projects & Featured Work</Title>
        {window.innerWidth >= 760 ? (
        <ProjectCarouselWrapper>
          <ImageWrap>
            <ProjectSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376358/Portfolio/ProjectBattlefy_eqdsdi.jpg"
              onClick={toBattlefy}
            />
            <TextForProject>
              Battlefy: SSBU Open Nintendo of America
            </TextForProject>
          </ImageWrap>
          <ImageWrap>
            <ProjectSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376364/Portfolio/ProjectGameJam18_pnfilj.jpg"
              onClick={toGameJam}
            />
            <TextForProject>BC Game Jam 18: First Place</TextForProject>
          </ImageWrap>
          <ImageWrap>
            <ProjectSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376360/Portfolio/ProjectEarTrainer_kyx3mr.jpg"
              onClick={toEarTrainer}
            />
            <TextForProject>Ear Trainer - iOS App</TextForProject>
          </ImageWrap>
          <ImageWrap>
            <ProjectSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376362/Portfolio/ProjectFlyCasual_o3noic.jpg"
              onClick={toFlyCasual}
            />
            <TextForProject>Fly Casual - Open Source Game</TextForProject>
          </ImageWrap>
        </ProjectCarouselWrapper>
        ) : (
          <ProjectCarouselWrapper>
          <ImageWrap>
            <MobileSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376358/Portfolio/ProjectBattlefy_eqdsdi.jpg"
              onClick={toBattlefy}
            />
            <TextForProject>
              Battlefy: SSBU Open Nintendo of America
            </TextForProject>
          </ImageWrap>
          <ImageWrap>
            <MobileSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376364/Portfolio/ProjectGameJam18_pnfilj.jpg"
              onClick={toGameJam}
            />
            <TextForProject>BC Game Jam 18: First Place</TextForProject>
          </ImageWrap>
          <ImageWrap>
            <MobileSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376360/Portfolio/ProjectEarTrainer_kyx3mr.jpg"
              onClick={toEarTrainer}
            />
            <TextForProject>Ear Trainer - iOS App</TextForProject>
          </ImageWrap>
          <ImageWrap>
            <MobileSnippet
              src="https://res.cloudinary.com/dw110cbuf/image/upload/v1555376362/Portfolio/ProjectFlyCasual_o3noic.jpg"
              onClick={toFlyCasual}
            />
            <TextForProject>Fly Casual - Open Source Game</TextForProject>
          </ImageWrap>
        </ProjectCarouselWrapper>
        )}
      </div>
    );
  }
}

export default ProjectCarousel;