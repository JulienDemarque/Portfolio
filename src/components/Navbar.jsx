import React from "react";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";

const MyNavbar = () => (
  <div>
    <Navbar right>
      <li>
        <NavLink to="/" exact activeClassName="active">
          <Icon>home</Icon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" activeClassName="active">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About me
        </NavLink>
      </li>
    </Navbar>
  </div>
);

export default MyNavbar;
