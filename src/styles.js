import styled from "styled-components";

const globeWidth = 12;
const globeHeight = 28;
const globeSpacing = 40;
const globeSpread = "3px";
const lightOffOpacity = 0.4;

export const Lights = styled.ul`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  margin: -15px 0 0 0;
  padding: 0;
  pointer-events: none;
  width: 100%;
  li {
    position: relative;
    animation-fill-mode: both;
    animation-iteration-count: ${(props) => (props.isOn ? "infinite" : "0s")};
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: ${globeWidth + "px"};
    height: ${globeHeight + "px"};
    border-radius: 50%;
    margin: ${globeSpacing / 2 + "px"};
    display: inline-block;
    background: ${(props) => `rgba(${props.colors[0]}, 0.2)`};
    box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
      ${globeSpread} ${(props) => `rgba(${props.colors[0]}, 0.2)`};
    animation-name: flash-1;
    animation-duration: ${(props) => `${props.speed}s`};
    &:nth-child(2n + 1) {
      background: ${(props) => `rgba(${props.colors[1]}, 0.2)`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgba(${props.colors[1]}, 0.2)`};
      animation-name: flash-2;
      animation-duration: ${(props) => `${props.speed - 0.2}s`};
    }
    &:nth-child(4n + 2) {
      background: ${(props) => `rgba(${props.colors[2]}, 0.2)`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgba(${props.colors[2]}, 0.2)`};
      animation-name: flash-3;
      animation-duration: ${(props) => `${props.speed - 0.3}s`};
    }
    &:nth-child(odd) {
      animation-duration: ${(props) => `${props.speed - 0.1}s`};
    }
    &:nth-child(3n + 1) {
      animation-duration: ${(props) => `${props.speed - 0.4}s`};
    }
    &:before {
      content: "";
      position: absolute;
      background: #adadaf;
      width: ${globeWidth - 2 + "px"};
      height: ${globeHeight / 3 + "px"};
      border-radius: 3px;
      top: ${0 - globeHeight / 6 + "px"};
      left: 1px;
    }
    &:after {
      content: "";
      top: ${0 - globeHeight / 2 + "px"};
      left: ${globeWidth - 3 + "px"};
      position: absolute;
      width: ${globeSpacing + 12 + "px"};
      height: ${(globeHeight / 3) * 2 + "px"};
      border-bottom: solid #adadaf 2px;
      border-radius: 50%;
    }
    &:last-child:after {
      content: none;
    }
    &:first-child {
      margin-left: -${globeSpacing + "px"};
    }
  }

  @keyframes flash-1 {
    0%,
    100% {
      background: ${(props) => `rgba(${props.colors[0]}, ${lightOffOpacity})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgba(${props.colors[0]}, 0.2)`};
    }
    50% {
      background: ${(props) => `rgb(${props.colors[0]})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgb(${props.colors[0]})`};
    }
  }
  @keyframes flash-2 {
    0%,
    100% {
      background: ${(props) => `rgba(${props.colors[1]}, ${lightOffOpacity})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgba(${props.colors[1]}, 0.2)`};
    }
    50% {
      background: ${(props) => `rgb(${props.colors[1]})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgb(${props.colors[1]})`};
    }
  }
  @keyframes flash-3 {
    0%,
    100% {
      background: ${(props) => `rgba(${props.colors[2]}, ${lightOffOpacity})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgba(${props.colors[2]}, 0.2)`};
    }
    50% {
      background: ${(props) => `rgb(${props.colors[2]})`};
      box-shadow: 0px ${globeHeight / 6 + "px"} ${globeWidth * 2 + "px"}
        ${globeSpread} ${(props) => `rgb(${props.colors[2]})`};
    }
  }
`;
