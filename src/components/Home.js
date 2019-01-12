import React, {Component} from "react";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../styles/Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.active
        ? "page page--open"
        : "page page--close"}
        onClick={this.props.active
        ? this.props.onClick
        : null}>
        <div className="page-internal">
          <h1>WELCOME TO APPENING</h1>

          <br/>
          <h3>AS THE NAME SUGGESTS, WE MAKE APPS.</h3>
          <h3>Web, Mobile and everything in between</h3>
          {/*
          <Link to="/about" className="link link--faded">
            Click here to go to About
          </Link>
          */}
          <div className="home-container">
            <Fade left>
              <div className="home-content">

                <h3>We take your idea shape it and give it back to you in it's finest form</h3>
                <Link to="/about" className="link link--faded">
                  <h2 className="link-to-about">More About Us</h2>
                </Link>
              </div>
            </Fade>
            <Fade right>
              <div
                className="home-image"
                style={{
                marginTop: '-100px'
              }}>
                <img src={require("../images/home-image.svg")}/>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
