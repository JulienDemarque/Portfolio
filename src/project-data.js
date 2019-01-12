const projectData = [
  {
    url: "",
    code: "https://github.com/JulienDemarque/portfolio",
    img: "img/cards/Portfolio.png",
    title: "This Porfolio",
    tags: ["react", "react-router", "sass", "materialize"],
    category: "all react"
  },
  {
    url: "https://priceless-stallman-0892b7.netlify.com/",
    code: "https://github.com/JulienDemarque/lawzen-platform-client",
    img: "img/cards/LawZen.png",
    title: "LawZen platform",
    tags: ["fullstack MERN", "bulma", "redux", "mongoose"],
    category: "all react"
  },
  {
    url: "https://distracted-shaw-6cfb30.netlify.com/",
    code: "https://github.com/JulienDemarque/react-happy-video",
    img: "img/cards/NpmLogo.png",
    title: "react-happy-video",
    tags: ["npm package", "react"],
    category: "all react npm Package"
  },
  {
    url: "https://zealous-curran-ccefa0.netlify.com/",
    code:
      "https://github.com/JulienDemarque/JAMstack-hackathon-video-audio-matcher",
    img: "img/cards/HackathonJAMstack.png",
    title: "Video-Audio Matcher",
    tags: ["WINNER", "react-static", "JAMstack", "apollographQL", "clarifai"],
    category: "all hackathon"
  },
  {
    url:
      "https://chrome.google.com/webstore/detail/hacker-news/hknoigmfpgfdkccnkbfbjfnocoegoefe?pli=1&authuser=1",
    code: "https://github.com/gitconnected/hacker-news-reader",
    img: "img/cards/HNClone.png",
    title: "Hacker News Clone",
    tags: ["react", "redux", "react-router", "reselect"],
    category: "all contributions react"
  },
  {
    url: "https://chord-progression-ear-training.herokuapp.com/chordapp",
    code: "https://github.com/JulienDemarque/EarTrainingApp",
    img: "img/cards/ChordTrainer.png",
    title: "Chord Progression Ear Trainer",
    tags: ["node", "express", "jquery"],
    category: "all various"
  },
  {
    url: "https://chord-progression-ear-training.herokuapp.com/chordnote",
    code: "https://github.com/JulienDemarque/EarTrainingApp",
    img: "img/cards/NoteTrainer.png",
    title: "Chord & Note Functional Ear Trainer",
    tags: ["node", "express", "jquery", "d3.js", "mongodb"],
    category: "all various"
  },
  {
    url: "https://www.lightinbabylon.com/",
    code: "",
    img: "img/cards/LightinBabylon.png",
    title: "Light in Babylon Website",
    tags: ["node", "express", "aws cloudfront"],
    category: "all various"
  },
  {
    url: "http://www.uninvitedjazzband.com/",
    code: "",
    img: "img/cards/UJB.png",
    title: "Uninvited Jazz Band Website",
    tags: ["jquery"],
    category: "all various"
  },

  {
    url: "https://happypanda-url-shortener.herokuapp.com/",
    code: "https://github.com/JulienDemarque/url-shortener",
    img: "img/cards/URLshortener.png",
    title: "URL Shortener",
    tags: ["node", "mongodb", "micro-service"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/jmoGMO/",
    code: "",
    img: "img/cards/Calculator.png",
    title: "Calculator App",
    tags: ["vanillajs"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/zweRqj/",
    code: "",
    img: "img/cards/PomodoroClock.png",
    title: "Pomodoro Clock",
    tags: ["vanillajs"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/LyLKzg/",
    code: "",
    img: "img/cards/WikipediaSearch.png",
    title: "Wikipedia Search Tool",
    tags: ["vanillajs"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/JNgyNQ",
    code: "",
    img: "img/cards/TicTacToe.png",
    title: "TicTacToe Game",
    tags: ["vanillajs"],
    category: "all various"
  },

  {
    url: "https://codepen.io/JulienDemarque/full/qmmeyZ/",
    code: "",
    img: "img/cards/LocalWeather.png",
    title: "Local Weather",
    tags: ["vanillajs"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/qmmRJe/",
    code: "",
    img: "img/cards/RandomQuote.png",
    title: "Random Quote",
    tags: ["vanillajs"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/pxgWgE/",
    code: "https://codepen.io/JulienDemarque/pen/pxgWgE",
    img: "img/cards/DrumMachine.png",
    title: "Drum Machine",
    tags: ["react"],
    category: "all react"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/rpKmoW/",
    code: "",
    img: "img/cards/ConveysGameOfLife.png",
    title: "Convey's Game of life",
    tags: ["react"],
    category: "all react"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/KZRzjN/",
    code: "",
    img: "img/cards/RecipeBox.png",
    title: "Recipe Box",
    tags: ["react"],
    category: "all react"
  },
  {
    url: "https://codepen.io/JulienDemarque/pen/jGWmOJ?editors=0100",
    code: "",
    img: "img/cards/CSSRick.png",
    title: "CSS Rick",
    tags: ["css"],
    category: "all various"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/NgbaOe/",
    code: "",
    img: "img/cards/SimonGame.png",
    title: "Simon Game",
    tags: ["vanillajs"],
    category: "all various"
  }
];

// moving courses project out:
/* const courses = [
  {
    url: "https://calm-woodland-37861.herokuapp.com/",
    code: "",
    img: "img/cards/YelpCamp.png",
    title: "YelpCamp",
    tags: ["node", "express", "mongodb", "Colt Steele course"],
    category: "all courses"
  },
  {
    url: "https://keyword-search-articles.herokuapp.com/",
    code: "",
    img: "img/cards/NYTimesSearch.png",
    title: "The NY Times Search",
    tags: [],
    category: "all courses"
  },
  {
    url: "https://codepen.io/JulienDemarque/full/WjqbrM/",
    code: "",
    img: "img/cards/ColorGame.png",
    title: "Color Game",
    tags: ["vanillajs", "Colt Steele course"],
    category: "all courses"
  }
]; */

export default projectData;
