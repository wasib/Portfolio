import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "./Background";
import WorkIndividual from "./WorkIndividual";
import "../styles/Work.css";
export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleZoom = () => {
    this.setState({
      open: !this.state.open
    });
    this.props.toggleMenuActive();
  };

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal">
          <Background />
          <h1>Work</h1>

          <WorkIndividual open={this.state.open} toggleZoom={this.toggleZoom} />

          <nav className="slider__nav">
            <button className="button button--nav-prev">
              p
              <i className="icon icon--arrow-left" />
              <span className="text-hidden">Previous product</span>
            </button>
            <button className="button button--zoom" onClick={this.toggleZoom}>
              z
              <i className="icon icon--zoom" />
              <span className="text-hidden">View details</span>
            </button>
            <button className="button button--nav-next">
              n
              <i className="icon icon--arrow-right" />
              <span className="text-hidden">Next product</span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}
