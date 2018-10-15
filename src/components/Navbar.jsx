import React from "react";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faYoutubeSquare,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";

const MyNavbar = () => (
  <div>
    <Navbar right>
      <li>
        <NavLink to="/" exact activeClassName="active">
          <Icon>home</Icon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" activeClassName="active">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About me
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/julien.demarque.9"
        >
          <FontAwesomeIcon
            className="awesome-icon"
            icon={faFacebookSquare}
            size="2x"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JulienDemarque"
        >
          <FontAwesomeIcon
            className="awesome-icon"
            icon={faGithubSquare}
            size="2x"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCddWNKWVL5KLs9YvswbmBUw"
        >
          <FontAwesomeIcon
            className="awesome-icon"
            icon={faYoutubeSquare}
            size="2x"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/JulienDemarque/"
        >
          <FontAwesomeIcon
            className="awesome-icon"
            icon={faCodepen}
            size="2x"
          />
        </a>
      </li>
    </Navbar>
  </div>
);

export default MyNavbar;
