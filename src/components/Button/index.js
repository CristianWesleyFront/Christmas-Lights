import React from "react";
import PointTarget from "react-point";

import "./styles.css";

function Button({ text, onPress, color, textColor = "#fff" }) {
  return (
    //<PointTarget onPoint={onPress}>
    <button
      className={`button`}
      style={{ color: textColor, background: color }}
      onClick={onPress}
    >
      {text}
    </button>
    //</PointTarget>
  );
}

export default Button;
