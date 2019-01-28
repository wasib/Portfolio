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
          <h1>WELCOME TO APPENING</h1>

          <div className="home-container">
            <Fade left>
              <div className="home-content">
                <p>AS THE NAME SUGGESTS, WE MAKE APPS.</p>
                <p>Web, Mobile and everything in between</p>
                <p>
                  We take your idea shape it and give it back to you in it's
                  finest form
                </p>
                <Link to="/about" className="link link--faded">
                  <h3 className="link-to-about">More About Us</h3>
                </Link>
              </div>
            </Fade>
            <Fade right>
              <div className="home-image">
                <img src={require("../images/home/home-image.svg")} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
