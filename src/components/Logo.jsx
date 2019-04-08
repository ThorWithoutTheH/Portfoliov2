import React from 'react';
import styled from '@emotion/styled';
import history from '../history';

import LogoImage from '../assets/images/Original-on-Transparent.png';

const Logo = styled.div`
  height: 240px;
  width: 200px;
  cursor: pointer;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 30px;
  transition: transform 300ms ease-in-out;

  &:hover {
      transform: translate(10px, 15px)
    }
`;

function redirectBackToHome() {
  history.push('/');
}

function MyLogo() {
    return (
        <Logo onClick={redirectBackToHome} />
    );
  }

export default MyLogo;