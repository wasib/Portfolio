import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <h1>Work</h1>

          <section className="slider">
            <div className="slide slide--current" data-content="content-1">
              <div className="slide__mover">
                <div
                  className={
                    this.state.open
                      ? "zoomer flex-center zoomer--active"
                      : "zoomer flex-center"
                  }
                >
                  <img
                    className="zoomer__image"
                    src={require("../images/iphone.png")}
                    alt="iPhone"
                  />
                  <div className="preview">
                    <img
                      src={require("../images/iphone-content-preview.png")}
                      alt="iPhone app preview"
                    />
                    <div className="zoomer__area zoomer__area--size-2" />
                  </div>
                </div>
              </div>
              <h2 className="slide__title">
                <span>The Classy</span> iPhone 6
              </h2>
            </div>
            <nav className="slider__nav">
              <button className="button button--nav-prev">
                <i className="icon icon--arrow-left" />
                <span className="text-hidden">Previous product</span>
              </button>
              <button className="button button--zoom" onClick={this.toggleZoom}>
                a
                <i className="icon icon--zoom" />
                <span className="text-hidden">View details</span>
              </button>
              <button className="button button--nav-next">
                <i className="icon icon--arrow-right" />
                <span className="text-hidden">Next product</span>
              </button>
            </nav>
          </section>

          <section
            className={this.state.open ? "content content--open" : "content"}
          >
            <div
              className={
                this.state.open
                  ? "content__item content__item--current"
                  : "content__item"
              }
              id="content-1"
            >
              <img
                className="content__item-img rounded-right"
                src={require("../images/iphone-content.png")}
                alt="Apple Watch Content"
              />
              <div className="content__item-inner">
                <h2>The iPhone 6</h2>
                <h3>Incredible performance for powerful apps</h3>
                <p>
                  Built on 64-bit desktop-class architecture, the new A8 chip
                  delivers more power, even while driving a larger display. The
                  M8 motion coprocessor efficiently gathers data from advanced
                  sensors and a new barometer. And with increased battery life,
                  iPhone 6 lets you do more, for longer than ever.
                </p>
                <p>
                  <a className="link link--page link--faded" href="https://www.apple.com/iphone-6/technology/">
                    Learn more about this technology ⟶
                  </a>
                </p>
              </div>
            </div>
            <button className="button button--close" onClick={this.toggleZoom}>
              x
              <i className="icon icon--circle-cross" />
              <span className="text-hidden">Close content</span>
            </button>
          </section>
        </div>
      </div>
    );
  }
}
