import React from "react";
import PointTarget from "react-point";

import "./styles.css";

function Button({ children, onClick, color, textColor = "#333" }) {
  return (
    //<PointTarget onPoint={onPress}>
    <button
      className={`button`}
      style={{ color: textColor, background: color }}
      onClick={onClick}
    >
      {children}
    </button>
    //</PointTarget>
  );
}

export default Button;
