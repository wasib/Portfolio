import React, { Component } from "react";
import { ProjectsData } from "../data/Projects";
export default class Workindividual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProjectsData[this.props.match.params.id]
    };
  }

  render() {
    return (
      <div>
        <section className="slider">
          <div className="slide slide--current">
            <div className="slide__mover">
              <div
                className={
                  this.props.open
                    ? "zoomer flex-center zoomer--active"
                    : "zoomer flex-center"
                }
              >
                <img
                  className="zoomer__image"
                  src={require(`../images/${this.state.data.zoomerImage}`)}
                  alt="iPhone"
                />
                <div className="preview">
                  <img
                    src={require(`../images/${this.state.data.previewImage}`)}
                    alt="iPhone app preview"
                  />
                </div>
              </div>
            </div>
            <h2 className="slide__title">
              <span>{this.state.data.platform}</span> {this.state.data.title}
            </h2>
          </div>
        </section>

        <section
          className={this.props.open ? "content content--open" : "content"}
        >
          <div
            className={
              this.props.open
                ? "content__item content__item--current"
                : "content__item"
            }
            id="content-1"
          >
            <img
              className="content__item-img rounded-right"
              src={require(`../images/${this.state.data.contentImage}`)}
              alt="Apple Watch Content"
            />
            <div className="content__item-inner">
              <h2>{this.state.data.contentHeader}</h2>
              <h3>{this.state.data.contentSubHeader}</h3>
              <p>{this.state.data.contentSummary}</p>
              <p>
                <a
                  className="link link--page link--faded"
                  href={this.state.data.projectLink}
                >
                  Learn more about this technology ⟶
                </a>
              </p>
            </div>
          </div>
          <button
            className="button button--close"
            onClick={this.props.toggleZoom}
          >
            <i className="icon icon--circle-cross fa fa-times-circle" />
            <span className="text-hidden">Close content</span>
          </button>
        </section>
      </div>
    );
  }
}
