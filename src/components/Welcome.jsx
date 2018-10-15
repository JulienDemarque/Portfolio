import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => (
  <div>
    <h4 className="welcome__text">
      Welcome! I am Julien Demarque,<br />
      a self-taught <strong>Web Developer.</strong>
      <br />
      Currently focusing on the MERN stack and progressively integrating the
      tools of the modern workflow.
    </h4>
    <p className="redirect__text">
      Go to my{" "}
      <NavLink to="/projects" activeClassName="active">
        Projects
      </NavLink>{" "}
      or use the navigation bar above to explore this website.
    </p>
    <img className="responsive-img" src="/img/Logos.png" alt="logos" />
  </div>
);

export default Welcome;
