import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./styles/styles.scss";

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
