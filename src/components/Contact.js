import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
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
            <Fade bottom delay={200}>
              <div className="contact-phone">+91 9177896188</div>
              <div className="contact-mail">test@gmail.com</div>
            </Fade>
            <Fade bottom delay={500}>
              <div className="contact-address">Hyderabad, India</div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
