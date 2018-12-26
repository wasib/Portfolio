import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import Subpage from "./components/Subpage";
import Nav from "./components/Nav";
import Page3 from "./components/Page3";
import "./styles/App.css";
import "./styles/Menu.css";
import "./styles/Pages.css";
import "./styles/Nav.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  menuClicked = () => {
    this.setState({
      active: !this.state.active
    });
  };

  

  render() {
    return (
      <Router>
        <div className="App">
          <button
            className={
              this.state.active
                ? "menu-button menu-button--open"
                : "menu-button"
            }
            onClick={this.menuClicked}
          >
            <span>Menu</span>
          </button>

          <Nav active={this.state.active} />

          <div
            className={
              this.state.active
                ? "pages-stack pages-stack--open"
                : "pages-stack"
            }
          >
            <div
              className={
                this.state.active
                  ? "page page-inactive page-inactive--open"
                  : "page page-inactive page-inactive--close"
              }
            />
            <div
              className={
                this.state.active
                  ? "page page-inactive2 page-inactive2--open"
                  : "page page-inactive2 page-inactive2--close"
              }
            />

            <Route
              render={({ location }) => {
                const { pathname } = location;
                return (
                  <TransitionGroup>
                    <CSSTransition
                      key={pathname}
                      classNames="fade"
                      timeout={{
                        enter: 450,
                        exit: 450
                      }}
                    >
                      <Route
                        location={location}
                        render={() => (
                          <Switch>
                            <Route
                              exact
                              path="/"
                              render={props => (
                                <Home {...props} active={this.state.active} />
                              )}
                            />
                            <Route
                              exact
                              path="/subpage"
                              render={props => (
                                <Subpage
                                  {...props}
                                  active={this.state.active}
                                />
                              )}
                            />
                            <Route
                              exact
                              path="/page3"
                              render={props => (
                                <Page3 {...props} active={this.state.active} />
                              )}
                            />
                          </Switch>
                        )}
                      />
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}
