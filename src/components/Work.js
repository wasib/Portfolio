import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Background from "./Background";
import WorkIndividual from "./WorkIndividual";
import { ProjectsData } from "../data/Projects";
import "../styles/Work.css";
import "../styles/WorkTransition.css";
export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      direction: "left",
      next: (parseInt(this.props.match.params.id) + 1) % ProjectsData.length,
      prev:
        this.props.match.params.id > 0
          ? (parseInt(this.props.match.params.id) - 1) % ProjectsData.length
          : ProjectsData.length - 1,
      count: ProjectsData.length
    };
  }

  toggleZoom = () => {
    this.setState({
      open: !this.state.open
    });
    this.props.toggleMenuActive();
  };

  changeProject = (dir, loc) => {
    this.setState({
      direction: dir
    });
    this.props.history.push(loc);
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id != prevProps.match.params.id)
      this.setState({
        next: (parseInt(this.props.match.params.id) + 1) % ProjectsData.length,
        prev:
          this.props.match.params.id > 0
            ? (parseInt(this.props.match.params.id) - 1) % ProjectsData.length
            : ProjectsData.length - 1
      });
  }

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal">
          <Background />
          <h1>Work</h1>
          <div className="work-individual-container">
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.pathname}
                classNames={this.state.direction == "left" ? "left" : "right"}
                timeout={{
                  enter: 450,
                  exit: 350
                }}
              >
                <Route
                  path="/work/:id"
                  render={props => (
                    <WorkIndividual
                      {...props}
                      open={this.state.open}
                      toggleZoom={this.toggleZoom}
                    />
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          </div>

          <nav className="slider__nav">
            <button
              className="button button--nav-prev"
              onClick={() =>
                this.changeProject("left", `/work/${this.state.prev}`)
              }
            >
              p
              <i className="icon icon--arrow-left" />
              <span className="text-hidden">Previous product</span>
            </button>
            <button className="button button--zoom" onClick={this.toggleZoom}>
              z
              <i className="icon icon--zoom" />
              <span className="text-hidden">View details</span>
            </button>
            <button
              className="button button--nav-next"
              onClick={() =>
                this.changeProject("right", `/work/${this.state.next}`)
              }
            >
              n
              <i className="icon icon--arrow-right" />
              <span className="text-hidden">Next product</span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}
