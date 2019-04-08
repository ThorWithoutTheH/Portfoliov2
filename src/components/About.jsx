import React, {Component} from 'react';
import styled from '@emotion/styled';

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const AboutMeText = styled.div`
  font-family: Raleway;
  font-size: 50px;
`;

const HighLight = styled.a`
  color: #E31B6D;
  cursor: pointer; 
  text-decoration: none;
  &:hover {
    transform: translate(5px, 5px);
    color: #decafe;
  }
`;

function About() {
  return (
    <AboutMeWrapper>
      <AboutMeText>
      I'm Vittorio Rosa, a <HighLight href='https://github.com/ThorWithoutTheH'>software developer</HighLight>
     <div> living in Vancouver</div>
     <div>  seeking new opportunities.</div>
      </AboutMeText>
    </AboutMeWrapper>
  )
}

export default About;