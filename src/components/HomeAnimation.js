import React from "react";
import '../styles/HomeAnimation.css';

const HomeAnimation = props => {
  return (
    <figure class="resize-box">
      <div class="webcam" />
      <div class="device-border">
        <div class="screen-mask">
          <svg
            class="resizable"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="506px"
            height="371.849px"
            viewBox="0 0 506 371.849"
          >
            <g class="body">
              <rect
                class="nav-dark"
                fill="#0079C2"
                width="26.5%"
                height="29.021"
                viewBox="0 0 506 371.849"
              />
              <rect
                class="nav-light"
                x="143"
                fill="#00AAFF"
                width="72%"
                height="29.021"
              />
              <rect
                class="hero"
                y="40"
                fill="#00AAFF"
                width="364"
                height="124.011"
              />
              <rect
                class="project proj-3"
                x="248.477"
                y="175.011"
                fill="#00AAFF"
                width="115.523"
                height="105"
              />
              <rect
                class="caption"
                y="290.011"
                fill="#00AAFF"
                width="364"
                height="49"
              />
              <rect
                class="etc"
                y="351.24"
                fill="#00AAFF"
                width="364"
                height="20.608"
              />
              <rect
                class="project proj-2"
                x="123.989"
                y="175.011"
                fill="#00AAFF"
                width="115.523"
                height="105"
              />
              <rect
                class="project proj-1"
                y="175.011"
                fill="#00AAFF"
                width="115.523"
                height="105"
              />
            </g>
            <rect
              class="sidebar side-1"
              x="374"
              y="40"
              fill="#C4C4C4"
              width="132"
              height="124.011"
            />
            <rect
              class="sidebar side-2"
              x="374"
              y="174.011"
              fill="#C4C4C4"
              width="132"
              height="56"
            />
            <rect
              class="sidebar side-3"
              x="374"
              y="241.011"
              fill="#C4C4C4"
              width="132"
              height="130.838"
            />
          </svg>
        </div>
      </div>
    </figure>
  );
};

export default HomeAnimation;