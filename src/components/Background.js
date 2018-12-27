import React from "react";
import Particles from "react-particles-js";
import "../styles/Background.css";

export default class Background extends React.Component {
  render() {
    return (
      <div className="background-particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: false
                }
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 2,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 0.4,
                direction: "none",
                out_mode: "out"
              },
              color: {
                value: "random"
              }
            }
          }}
        />
      </div>
    );
  }
}
