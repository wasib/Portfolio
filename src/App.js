import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./components/Main";
import './styles/App.css'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}
