import React from "react";
import { Navbar, NavItem } from "react-materialize";

const MyNavbar = () => (
  <div>
    <Navbar right>
      <NavItem href="get-started.html">Skills</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="components.html">About me</NavItem>
    </Navbar>
  </div>
);

export default MyNavbar;
