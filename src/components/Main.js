import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Subpage from "./Subpage";
import Nav from "./Nav";
import Page3 from "./Page3";
import "../styles/Main.css";
import "../styles/Menu.css";
import "../styles/Pages.css";
import "../styles/Nav.css";

const routes = ["/", "/subpage", "/page3"];

class Main extends React.Component {
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

  inactivePageClicked = () => {
    let i = routes.indexOf(this.props.location.pathname);
    this.props.history.push(routes[++i%routes.length]);
  };

  inactivePage2Clicked = () => {
    let i = routes.indexOf(this.props.location.pathname);
    this.props.history.push(routes[(i+2)%routes.length]);
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(
        function() {
          this.setState({ active: false });
        }.bind(this),
        150
      );
    }
  }

  render() {
    return (
      <div className="main-container">
        <button
          className={
            this.state.active ? "menu-button menu-button--open" : "menu-button"
          }
          onClick={this.menuClicked}
        >
          <span>Menu</span>
        </button>

        <Nav active={this.state.active} />

        <div
          className={
            this.state.active ? "pages-stack pages-stack--open" : "pages-stack"
          }
        >
          <div
            className={
              this.state.active
                ? "page page-inactive page-inactive--open"
                : "page page-inactive page-inactive--close"
            }
            onClick={this.state.active ? this.inactivePageClicked : null}
          />
          <div
            className={
              this.state.active
                ? "page page-inactive2 page-inactive2--open"
                : "page page-inactive2 page-inactive2--close"
            }
            onClick={this.state.active ? this.inactivePage2Clicked : null}
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
                              <Home
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/subpage"
                            render={props => (
                              <Subpage
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/page3"
                            render={props => (
                              <Page3
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
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
    );
  }
}

export default withRouter(props => <Main {...props} />);
