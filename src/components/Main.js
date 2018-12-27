import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Nav from "./Nav";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Team from "./Team";
import About from "./About";
import Work from "./Work";
import Pricing from "./Pricing";
import Terms from "./Terms";
import "../styles/Main.css";
import "../styles/Menu.css";
import "../styles/Pages.css";
import "../styles/Nav.css";

const routes = ["/", "/about", "/work", "/team", "/pricing", "/contact"];

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      menuActive: true
    };
  }

  menuClicked = () => {
    this.setState({
      active: !this.state.active
    });
  };

  toggleMenuActive = () => {
    this.setState({
      menuActive: !this.state.menuActive
    });
  };

  inactivePageClicked = () => {
    let i = routes.indexOf(this.props.location.pathname);
    this.props.history.push(routes[++i % routes.length]);
  };

  inactivePage2Clicked = () => {
    let i = routes.indexOf(this.props.location.pathname);
    this.props.history.push(routes[(i + 2) % routes.length]);
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(
        function() {
          this.setState({ active: false, menuActive: true });
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
          style={{ visibility: this.state.menuActive ? "visible" : "hidden" }}
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
                            path="/about"
                            render={props => (
                              <About
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/contact"
                            render={props => (
                              <Contact
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/work"
                            render={props => (
                              <Work
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                                toggleMenuActive={this.toggleMenuActive}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/team"
                            render={props => (
                              <Team
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/pricing"
                            render={props => (
                              <Pricing
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/privacy"
                            render={props => (
                              <Privacy
                                {...props}
                                active={this.state.active}
                                onClick={this.menuClicked}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/terms"
                            render={props => (
                              <Terms
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
