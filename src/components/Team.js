import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Background from "./Background";
import "../styles/Team.css";

export default class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal team-page">
          <Background />
          <h1>Team</h1>

          <Fade top cascade delay={100}>
            <div className="team-container">
              <div className="team-individual one">
                <div className="stack">
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__figure">
                    <img
                      className="stack__img"
                      src={require("../images/team-1.png")}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="team-individual-content">
                  <div className="team-individual-name">
                    <h3>Sai Tej Dandge</h3>
                  </div>
                  <div className="team-individual-details">
                    <p>Information about that person here</p>
                    <p>probably a few lines</p>
                  </div>
                </div>
              </div>

              <div className="team-individual two">
                <div className="stack">
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__figure">
                    <img
                      className="stack__img"
                      src={require("../images/team-2.png")}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="team-individual-content">
                  <div className="team-individual-name">
                    <h3>Mohammed Wasib</h3>
                  </div>
                  <div className="team-individual-details">
                    <p>Information about that person here</p>
                    <p>probably a few lines</p>
                  </div>
                </div>
              </div>

              <div className="team-individual three">
                <div className="stack">
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__deco" />
                  <div className="stack__figure">
                    <img
                      className="stack__img"
                      src={require("../images/team-3.png")}
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="team-individual-content">
                  <div className="team-individual-name">
                    <h3>Mohammed Aasif</h3>
                  </div>
                  <div className="team-individual-details">
                    <p>Information about that person here</p>
                    <p>probably a few lines</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
