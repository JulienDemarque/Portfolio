import React from "react";
import Card from "./Card";

const projectsData = [
  {
    url: "",
    img: "img/cards/Portfolio.png",
    title: "This Porfolio",
    details: ""
  },
  {
    url: "https://www.lightinbabylon.com/",
    img: "img/cards/LightinBabylon.png",
    title: "Light in Babylon Website",
    details: ""
  },
  {
    url: "http://www.uninvitedjazzband.com/",
    img: "img/cards/UJB.png",
    title: "Uninvited Jazz Band Website",
    details: ""
  },
  {
    url: "https://chord-progression-ear-training.herokuapp.com/chordapp",
    img: "img/cards/ChordTrainer.png",
    title: "Chord Progression Ear Trainer",
    details: ""
  },
  {
    url: "https://chord-progression-ear-training.herokuapp.com/chordnote",
    img: "img/cards/NoteTrainer.png",
    title: "Chord & Note Functional Ear Trainer",
    details: ""
  },
  {
    url: "https://calm-woodland-37861.herokuapp.com/",
    img: "img/cards/YelpCamp.png",
    title: "YelpCamp",
    details: ""
  },
  {
    url: "https://keyword-search-articles.herokuapp.com/",
    img: "img/cards/NYTimesSearch.png",
    title: "The NY Times Search",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/jmoGMO/",
    img: "img/cards/Calculator.png",
    title: "Calculator App",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/zweRqj/",
    img: "img/cards/PomodoroClock.png",
    title: "Pomodoro Clock",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/LyLKzg/",
    img: "img/cards/WikipediaSearch.png",
    title: "Wikipedia Search Tool",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/JNgyNQ",
    img: "img/cards/TicTacToe.png",
    title: "TicTacToe Game",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/WjqbrM/",
    img: "img/cards/ColorGame.png",
    title: "Color Game",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/qmmeyZ/",
    img: "img/cards/LocalWeather.png",
    title: "Local Weather",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/qmmRJe/",
    img: "img/cards/RandomQuote.png",
    title: "Random Quote",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/qmmRJe/",
    img: "img/cards/DrumMachine.png",
    title: "Drum Machine",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/rpKmoW/",
    img: "img/cards/ConveysGameOfLife.png",
    title: "Convey's Game of life",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/KZRzjN/",
    img: "img/cards/RecipeBox.png",
    title: "Recipe Box",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/pen/jGWmOJ?editors=0100",
    img: "img/cards/CSSRick.png",
    title: "CSS Rick",
    details: ""
  },
  {
    url: "https://codepen.io/JulienDemarque/full/NgbaOe/",
    img: "img/cards/SimonGame.png",
    title: "Simon Game",
    details: ""
  }
];

class Projects extends React.Component {
  state = {
    data: projectsData,
    filterPair: false
  };

  render() {
    return (
      <div>
        <div className="container filters">
          <a className="waves-effect waves-teal btn-flat">All</a>
          <a className="waves-effect waves-teal btn-flat">React</a>
          <a className="waves-effect waves-teal btn-flat">Various</a>
        </div>
        <div className=" projects__container">
          {this.state.data.map(project => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
