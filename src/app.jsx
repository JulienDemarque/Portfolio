import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./styles/styles.scss";

ReactDOM.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>,
  document.getElementById("app")
);
