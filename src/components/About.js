import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../styles/About.css";

export default class About extends Component {
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
          <Fade cascade top distance="30px">
            <div className="about-container">
              <div className="about-heading">ABOUT US</div>
              <div className="about-content">
                We design and develop <span className="marked">modern</span>{" "}
                websites with an emphasis on details, UI-animations, user
                interaction and <span className="marked">innovative</span>{" "}
                technologies. Our <span className="marked">goal</span> is to
                create a product, which will help your company to stand out, to{" "}
                <span className="marked">attract</span> the audience and to{" "}
                <span className="marked">increase</span> brand loyalty.
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="contact-button">
              <Link to="/contact">CONTACT US</Link>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
