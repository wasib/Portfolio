import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Subpage extends Component {
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
          <h1>Subpage</h1>
          <p>Hello from a sub page!</p>
          <Link to="/" className="link">
            Click here to go to Home
          </Link>
        </div>
      </div>
    );
  }
}
