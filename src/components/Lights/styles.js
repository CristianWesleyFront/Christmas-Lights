import styled from "styled-components";
import { opacify, darken, lighten } from "polished";

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
    /* Geral Styles */
    margin: 20px;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;

    /* Format */
    width: 12px;
    height: 28px;
    border-radius: 50%;

    /* Animations */
    animation-fill-mode: both;
    animation-iteration-count: ${(props) => (props.onOff ? "infinite" : "0s")};

    /* Light 01 */

    background: ${(props) => darken(0.3, props.red)};
    box-shadow: 0px 4.5px 24px 3px;
    animation-name: ${(props) => (props.onOff ? "Light01" : "")};
    animation-duration: ${(props) => 2 / props.speed + "s"};

    @keyframes Light01 {
      0% {
        background: ${(props) => opacify(0.2, props.red)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.red)};
      }
      50% {
        background: ${(props) => darken(0.3, props.red)};
        box-shadow: 0px 4.5px 24px 3px;
      }
      100% {
        background: ${(props) => opacify(0.2, props.red)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.red)};
      }
    }

    /* Light 02 */

    &:nth-child(2n + 1) {
      background: ${(props) => darken(0.1, props.green)};
      box-shadow: 0px 4.5px 24px 3px;
      animation-name: ${(props) => (props.onOff ? "Light02" : "")};
      animation-duration: ${(props) => 0.4 / props.speed + "s"};
    }

    @keyframes Light02 {
      0% {
        background: ${(props) => opacify(0.2, props.green)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.green)};
      }
      50% {
        background: ${(props) => darken(0.1, props.green)};
        box-shadow: 0px 4.5px 24px 3px;
      }
      100% {
        background: ${(props) => opacify(0.2, props.green)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.green)};
      }
    }

    /* Light 03 */

    &:nth-child(4n + 2) {
      background: ${(props) => darken(0.3, props.blue)};
      box-shadow: 0px 4.5px 24px 3px;
      animation-name: ${(props) => (props.onOff ? "Light03" : "")};
      animation-duration: ${(props) => 1.1 / props.speed + "s"};
    }

    @keyframes Light03 {
      0% {
        background: ${(props) => opacify(0.2, props.blue)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.blue)};
      }
      50% {
        background: ${(props) => darken(0.3, props.blue)};
        box-shadow: 0px 4.5px 24px 3px;
      }
      100% {
        background: ${(props) => opacify(0.2, props.blue)};
        box-shadow: 0px 4.5px 24px 3px ${(props) => lighten(0.1, props.blue)};
      }
    }

    /* odd duration lights */

    &:nth-child(odd) {
      animation-duration: ${(props) => 1.8 / props.speed + "s"};
    }

    &:nth-child(3n + 1) {
      animation-duration: ${(props) => 1.4 / props.speed + "s"};
    }

    /* lamp nozzle */

    &:before {
      content: "";
      position: absolute;
      background: #adadaf;
      width: 10px;
      height: 9px;
      border-radius: 3px;
      top: -4.5px;
      left: 1px;
    }

    /* lamp thread */
    &:after {
      content: "";
      position: absolute;
      top: -14px;
      left: 9px;
      width: 52px;
      height: 18.5px;
      border-bottom: solid #adadaf 2px;
      border-radius: 50%;
    }

    &:last-child:after {
      content: none;
    }

    &:first-child {
      margin-left: -40px;
    }
  }
`;
