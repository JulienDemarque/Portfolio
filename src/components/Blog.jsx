import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Blog = () => (
  <div className="blog__container">
    <h4>
      <FontAwesomeIcon icon={faPencilAlt} size="lg" /> Blog
    </h4>
    <p>
      I just started to write articles about what I learnt. Beside adding my
      contribution to the self-taught community, my purpose is to solidify my
      own knowledge of JavaScript by explaining to others its core principles.
      Here is my first article :
    </p>

    <div className="blog__medium__container">
      <div className="blog__medium__icon-container">
        <FontAwesomeIcon icon={faMedium} size="4x" />
      </div>
      <div className="blog__medium__text">
        <p className="blog__medium__text blog__medium__title">
          Understanding the “this” keyword in JavaScript
        </p>
        <p className="blog__medium__text blog__medium__subtitle">
          Lessons learnt from YDKJS “this & Object Prototypes” — Part 1
        </p>
        <p className="blog__medium__text blog__medium__preview">
          This article will try to cover only the essential points from You
          Don’t Know JS “this & Object Prototypes” by Kyle Simpson...{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@juliendemarquedev/lessons-learnt-from-ydkjs-this-object-prototypes-part-1-be9db05f90e6"
          >
            read more on Medium{" "}
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Blog;
