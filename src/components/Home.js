import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../styles/Home.css";
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
          <h1>Appening</h1>
          <p>Hello from the home page!</p>
          <Link to="/about" className="link link--faded">
            Click here to go to About
          </Link>
          <div className="home-container">
            <Fade left>
              <div className="home-content">AAA</div>
            </Fade>
            <Fade right>
              <div className="home-image">
                <img src={require("../images/home-image.svg")} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
