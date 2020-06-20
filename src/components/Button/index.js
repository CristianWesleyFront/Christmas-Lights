import React from "react";
import PointTarget from "react-point";

import "./styles.css";

function Button({ children, onClick, color, textColor = "#333" }) {
  return (
    <PointTarget onPoint={onClick}>
      <button
        className={`button`}
        style={{ color: textColor, background: color }}
      >
        {children}
      </button>
    </PointTarget>
  );
}

export default Button;
