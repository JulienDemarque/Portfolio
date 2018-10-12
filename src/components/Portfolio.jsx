import React from "react";
import { Switch, Route } from "react-router-dom";
import MyNavbar from "./Navbar";
import Welcome from "./Welcome";
import Projects from "./Projects";

const Portfolio = () => (
  <div>
    <MyNavbar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  </div>
);

export default Portfolio;
