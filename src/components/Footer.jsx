import React, { Component } from "react";
import styled from "@emotion/styled";
import { injectGlobal } from "emotion";
import Raleway from "../assets/fonts/Raleway-Regular.ttf";
import OpenSans from "../assets/fonts/OpenSans-SemiBold.ttf";

const InfoBoxWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledName = styled.h3`
  font-family: Raleway;
  font-size: 30px;
`;

const Highlight = styled.a`
  font-family: "Open Sans";
  color: #e31b6d;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
  font-size: 30px;
  margin-left: 5px;
  &:hover {
    transform: translate(5px, 5px);
    color: #decafe;
  }
`;

const SocialMediaLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SocialMediaLinks = styled.a`
  margin: 15px;
  font-family: Raleway;
  transition: transform 300ms ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #e31b6d;
  }
`;

function mailTo() {
  window.location.href = "mailto:vittoriorosa1@gmail.com";
}

class Footer extends Component {
  render() {
    return (
      <div>
        <InfoBoxWrapper>
          <StyledName>Looking to start a project?</StyledName>
          <Highlight onClick={mailTo}>Let's talk.</Highlight>
        </InfoBoxWrapper>
        <SocialMediaLinkWrapper>
          <SocialMediaLinks href="https://github.com/ThorWithoutTheH">
            Github
          </SocialMediaLinks>
          <SocialMediaLinks href="https://www.linkedin.com/in/vittoriogrosa/">
            LinkedIn
          </SocialMediaLinks>
          <SocialMediaLinks href="https://www.linkedin.com/in/vittoriogrosa/">
            Instagram
          </SocialMediaLinks>
          <SocialMediaLinks onClick={mailTo}>Email</SocialMediaLinks>
        </SocialMediaLinkWrapper>
      </div>
    );
  }
}

export default Footer;
