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
          <Link to="/subpage" className="link link--page">
            Subpage
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/page3" className="link link--page">
            Page 3
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/" className="link link--page">
            Home
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/subpage" className="link link--page">
            Subpage
          </Link>
        </div>
        <div className="pages-nav__item">
          <Link to="/page3" className="link link--page">
            Page 3
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/" className="link link--page link--faded">
            Home
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/subpage" className="link link--page link--faded">
            Subpage
          </Link>
        </div>
        <div className="pages-nav__item pages-nav__item--small">
          <Link to="/page3" className="link link--page link--faded">
            Page 3
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
