import React, { useState } from "react";

import "./App.css";

import Lights from "./components/Lights";
import Button from "./components/Button";

function App() {
  const [onOff, setOnOff] = useState(true);
  const [speed, setSpeed] = useState(1);

  const handleSwitchedOn = () => {
    setOnOff(!onOff);
  };

  const handleSpeed = () => {
    if (speed < 5) {
      setSpeed(speed + 1);
    } else {
      setSpeed(1);
    }
  };

  return (
    <div>
      <Lights onOff={onOff} speed={speed} />
      <div className="App">
        <Button onClick={handleSwitchedOn}>{onOff ? "OFF" : "ON"}</Button>
        <Button onClick={handleSpeed}>{speed}X</Button>
      </div>
    </div>
  );
}

export default App;
