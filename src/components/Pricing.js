import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Background from "./Background";
import "../styles/Pricing.css";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal pricing-container">
          <Background />
          <h1>Pricing</h1>

          <section className="pricing-section bg-11">
          <Fade bottom cascade delay={100}>
            <div className="pricing pricing--tenzin">
              <div className="pricing__item">
                <h3 className="pricing__title">Freelancer</h3>
                <div className="pricing__price">
                  <span className="pricing__currency">$</span>9.90
                </div>
                <p className="pricing__sentence">
                  Perfect for single freelancers who work by themselves
                </p>
                <ul className="pricing__feature-list">
                  <li className="pricing__feature">Support forum</li>
                  <li className="pricing__feature">Free hosting</li>
                  <li className="pricing__feature">40MB of storage space</li>
                </ul>
                <button className="pricing__action">Choose plan</button>
              </div>
              <div className="pricing__item">
                <h3 className="pricing__title">Small business</h3>
                <div className="pricing__price">
                  <span className="pricing__currency">$</span>29,90
                </div>
                <p className="pricing__sentence">
                  Suitable for small businesses with up to 5 employees
                </p>
                <ul className="pricing__feature-list">
                  <li className="pricing__feature">Unlimited calls</li>
                  <li className="pricing__feature">Free hosting</li>
                  <li className="pricing__feature">10 hours of support</li>
                  <li className="pricing__feature">Social media integration</li>
                  <li className="pricing__feature">1GB of storage space</li>
                </ul>
                <button className="pricing__action">Choose plan</button>
              </div>
              <div className="pricing__item">
                <h3 className="pricing__title">Larger business</h3>
                <div className="pricing__price">
                  <span className="pricing__currency">$</span>59,90
                </div>
                <p className="pricing__sentence">
                  Great for large businesses with more than 5 employees
                </p>
                <ul className="pricing__feature-list">
                  <li className="pricing__feature">Unlimited calls</li>
                  <li className="pricing__feature">Free hosting</li>
                  <li className="pricing__feature">
                    Unlimited hours of support
                  </li>
                  <li className="pricing__feature">Social media integration</li>
                  <li className="pricing__feature">Anaylitcs integration</li>
                  <li className="pricing__feature">Unlimited storage space</li>
                </ul>
                <button className="pricing__action">Choose plan</button>
              </div>
            </div>
            </Fade>
          </section>

        </div>
      </div>
    );
  }
}
