import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from './Background'
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal">
        <Background/>
          <h1>Home</h1>
          <p>Hello from the home page!</p>
          <Link to="/about" className="link">
            Click here to go to About
          </Link>
        </div>
      </div>
    );
  }
}
