import React, { Component } from "react";
import { Link } from "react-router-dom";


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
        <div className="page-internal">
          <h1>Team</h1>
          <p>Hello from the team page!</p>
        </div>
      </div>
    );
  }
}
