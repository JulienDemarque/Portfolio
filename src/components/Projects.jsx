import React from "react";
import FlipMove from "react-flip-move";
import Card from "./Card";
import projectData from "../project-data";

class Projects extends React.Component {
  state = {
    data: projectData,
    filterKeyword: "ALL"
  };

  handleFilter = event => {
    this.setState({ filterKeyword: event.target.innerText });
  };

  render() {
    return (
      <div>
        <div className="container filters">
          <button
            onClick={this.handleFilter}
            className="waves-effect waves-teal btn-flat"
          >
            All
          </button>
          <button
            onClick={this.handleFilter}
            className="waves-effect waves-teal btn-flat"
          >
            React
          </button>
          <button
            onClick={this.handleFilter}
            className="waves-effect waves-teal btn-flat"
          >
            Contributions
          </button>
          <button
            onClick={this.handleFilter}
            className="waves-effect waves-teal btn-flat"
          >
            Hackathon
          </button>
          <button
            onClick={this.handleFilter}
            className="waves-effect waves-teal btn-flat"
          >
            Various
          </button>
        </div>

        <FlipMove easing="ease" duration="800" className=" projects__container">
          {this.state.data
            .filter(
              project =>
                project.category
                  .toUpperCase()
                  .indexOf(this.state.filterKeyword) >= 0
            )
            .map(project => <Card key={project.title} project={project} />)}
        </FlipMove>
      </div>
    );
  }
}

export default Projects;
