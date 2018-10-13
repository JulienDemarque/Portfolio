import React from "react";
import { Switch, Route } from "react-router-dom";
import MyNavbar from "./Navbar";
import Welcome from "./Welcome";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

const Portfolio = () => (
  <div>
    <MyNavbar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </div>
);

export default Portfolio;
