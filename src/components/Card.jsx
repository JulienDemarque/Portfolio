import React from "react";
import { Icon, Chip } from "react-materialize";
import PropTypes from "prop-types";

class Card extends React.Component {
  state = { hovered: false };

  handleMouseOver = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { img, title, url, code, tags } = this.props.project;
    const { hovered } = this.state;
    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        className="card"
      >
        <div className="card__img-container">
          <img className="card__img" alt="project preview" src={img} />
        </div>
        <div className="card__title valign-wrapper">
          <p>{title}</p>
        </div>
        <div
          className={
            hovered ? "card__details card__details--active" : "card__details"
          }
        >
          <div className="card__details__container">
            <div className="card__details__tags">
              {tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
            </div>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <div className="card__details__link">
                <div>
                  <Icon>desktop_mac</Icon>
                </div>
                See Project
              </div>
            </a>

            {code ? (
              <a rel="noopener noreferrer" target="_blank" href={code}>
                <div className="card__details__link">
                  <div>
                    <Icon>code</Icon>
                  </div>
                  See Code
                </div>
              </a>
            ) : (
              undefined
            )}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    url: PropTypes.string,
    code: PropTypes.string,
    tags: PropTypes.array
  }).isRequired
};

export default Card;
