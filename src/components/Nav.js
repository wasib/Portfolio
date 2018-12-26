import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.active ? "pages-nav pages-nav--open" : "pages-nav"
        }
      >
        <div className="pages-nav__item">
          <Link to="/" className="link link--page">
            Home
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/about" className="link link--page">
            About
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/work" className="link link--page">
            Work
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/team" className="link link--page">
            Team
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/pricing" className="link link--page">
            Pricing
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/contact" className="link link--page">
            Contact
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/privacy" className="link link--page link--faded">
            Privacy
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/terms" className="link link--page link--faded">
            Terms
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/" className="link link--page link--faded">
            Blog
          </Link>
        </div>

        <div className="pages-nav__item pages-nav__item--social">
          <a className="link link--social link--faded" href="#">
            <i className="fa fa-twitter" />
            <span className="text-hidden">Twitter</span>
          </a>
          <a className="link link--social link--faded" href="#">
            <i className="fa fa-linkedin" />
            <span className="text-hidden">LinkedIn</span>
          </a>
          <a className="link link--social link--faded" href="#">
            <i className="fa fa-facebook" />
            <span className="text-hidden">Facebook</span>
          </a>
          <a className="link link--social link--faded" href="#">
            <i className="fa fa-youtube-play" />
            <span className="text-hidden">YouTube</span>
          </a>
          <a className="link link--social link--faded" href="#">
            <i className="fa fa-medium" />
            <span className="text-hidden">Medium</span>
          </a>
        </div>
      </div>
    );
  }
}
