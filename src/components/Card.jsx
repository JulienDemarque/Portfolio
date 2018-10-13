import React from "react";
import PropTypes from "prop-types";

const Card = props => (
  <div className="card">
    <div className="card__img-container">
      <img
        className="card__img"
        alt="project preview"
        src={props.project.img}
      />
    </div>
    <div className="card__title valign-wrapper">
      <p>{props.project.title}</p>
    </div>
  </div>
);

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string
  }).isRequired
};

export default Card;
