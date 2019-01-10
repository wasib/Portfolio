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
          <h1 className="contact-heading">Contact</h1>

          <div className="contact-info">
            <Fade bottom delay={200}>
              <div className="contact-phone">
                <a href="tel: +919177896188">+91 9177896188</a>
              </div>
              <div className="contact-mail">
                <a href="mailto: test@gmail.com">test@gmail.com</a>
              </div>
            </Fade>
            <Fade bottom delay={500}>
              <div className="contact-address">
                <a target="_blank" href="https://www.google.com/maps/dir//Gayathri+Nagar+Water+Tank+Road,+Parvath+Nagar,+Gayatri+Nagar,+Tulasi+Nagar,+Madhapur,+Hyderabad,+Telangana+500018/@17.4553773,78.4014936,18.54z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bcb916dd353178b:0x52b9a97be5c6108c!2m2!1d78.4016747!2d17.4551097!3e0">
                  Hyderabad, India
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
