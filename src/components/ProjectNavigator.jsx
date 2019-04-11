import React from "react";
import styled from "@emotion/styled";
import history from "../history";

const ProjectsWrapper = styled.div`
  max-width: 100%;
  display: flex;
`;

const NextProj = styled.div`
  width: 50%;
  height: 50%;
  border-style: solid;
  border-width: 5px;


  &:hover {
    box-shadow: 0 2px 2px #bababa;
   transform: translate(0px, -5px);
 }
`;

const PreviousProj = styled.div`
  width: 50%;
  height: 50%;
  border-style: solid;
  border-width: 5px;
  &:hover {
    box-shadow: 0 2px 2px #bababa;
   transform: translate(0px, -5px);
 }
`;

function nextProject() {

}

function previousProject() {

}

function returnHome() {

}


function ProjectNavigator () {
	return (
	<ProjectsWrapper>
		<PreviousProj>Previous Project</PreviousProj>
		<NextProj >Next Project</NextProj>
	</ProjectsWrapper>
	);
}

export default ProjectNavigator;