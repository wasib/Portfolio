import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

export default class Contact extends Component {
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
          <div className="contact-background" />
          <div className="contact-noise" />
          <h1>Contact</h1>

          <div className="contact-info">
            <div className="contact-phone">12345</div>
            <div className="contact-mail">test@gmail.com</div>
            <div className="contact-address">Hyderabad, India</div>
          </div>
        </div>
      </div>
    );
  }
}
