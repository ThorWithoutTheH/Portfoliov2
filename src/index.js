import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import history from "./history";
import { injectGlobal } from "emotion";
import Raleway from "./assets/fonts/Raleway-Regular.ttf";
import OpenSans from "./assets/fonts/OpenSans-SemiBold.ttf";
import Abel from "./assets/fonts/Abel-Regular.ttf";
import ScrollToTop from './components/ScrollToTop';
import Home from "./components/Home";
import Battlefy from "./components/projects/Battlefy";
import GameJam from "./components/projects/GameJam";
import EarTrainer from "./components/projects/EarTrainer";
import FlyCasual from "./components/projects/FlyCasual";

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway});
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans});
  }
  @font-face {
    font-family: 'Abel-Regular';
    src: url(${Abel});
  }
`;

ReactDOM.render(
  <Router history={history}>
  <ScrollToTop>
    <Route exact path="/" component={Home} />
    <Route exact path="/work-battlefy" component={Battlefy} />
    <Route exact path="/projects-bcgamejam18" component={GameJam} />
    <Route exact path="/projects-eartrainer" component={EarTrainer} />
    <Route exact path="/projects-flycasual" component={FlyCasual} />
  </ScrollToTop>
  </Router>,
  document.getElementById("app")
);
