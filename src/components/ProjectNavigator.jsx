import React from "react";
import styled from "@emotion/styled";
import history from "../history";

const ProjectsWrapper = styled.div`


`;

const NextProj = styled.div`




`;

const PreviousProj = styled.div`



`;


function ProjectNavigator () {
    return (
    <ProjectsWrapper>
        <PreviousProj>Previous Project</PreviousProj>
        <NextProj >Next Project</NextProj>
    </ProjectsWrapper>
    );
}

export default ProjectNavigator;