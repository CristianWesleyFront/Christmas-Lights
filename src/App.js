import React, { useState, useEffect } from "react";

import "./App.css";

import { Lights } from "./styles";
import Card from "./components/Card";
import Button from "./components/Button";

const colorsRed = [
  "246, 113, 79",
  "255,130,48",
  "245,47,75",
  "245,216,42",
  "255,0,0",
];
const colorsBlue = [
  "67, 60, 200",
  "21, 18, 61",
  "120,2,189",
  "179,1,189",
  "0,0,255",
];
const colorsGreen = [
  "175, 254, 72",
  "60, 200, 162",
  "0,135,189",
  "0,87,188",
  "0,128,0",
];

function App() {
  const [isOn, setIsOn] = useState(true);
  const [colors, setColors] = useState([]);
  const [velocity, setVelocity] = useState(2);

  useEffect(() => {
    setColors([colorsRed[4], colorsGreen[4], colorsBlue[4]]);
  }, []);

  const handleSetColorsRed = (color) => {
    let aux = colors;
    aux[0] = color;
    setColors([...aux]);
  };

  console.log(colors);

  return (
    <>
      <Lights colors={colors} isOn={isOn} speed={velocity}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Lights>
      <div className="App">
        <Card>
          <div className="container">
            <div className="row">
              <Button
                text={"C"}
                color={"#f5f5f5"}
                textColor={"#333"}
                onPress={() => console.log("oi")}
              />
              <Button
                text={"C"}
                color={"#f5f5f5"}
                textColor={"#333"}
                onPress={() => console.log("oi")}
              />
              <Button
                text={"OFF"}
                color={"#333"}
                onPress={() => setIsOn(false)}
              />
              <Button text={"ON"} color={"red"} onPress={() => setIsOn(true)} />
            </div>
            <div className="row">
              <Button
                text={"R"}
                color={`rgb(${colorsRed[4]})`}
                onPress={() => handleSetColorsRed(colorsRed[4])}
              />
              <Button
                text={"G"}
                color={`rgb(${colorsGreen[4]})`}
                onPress={() =>
                  setColors([colors[0], colorsGreen[4], colors[2]])
                }
              />
              <Button
                text={"B"}
                color={`rgb(${colorsBlue[4]})`}
                onPress={() => setColors([colors[0], colors[1], colorsBlue[4]])}
              />
              <Button
                text={"W"}
                textColor={"#333"}
                onPress={() =>
                  setColors(["255,255,255", "255,255,255", "255,255,255"])
                }
              />
            </div>
            <div className="row">
              <Button
                text={""}
                color={`rgb(${colorsRed[0]})`}
                onPress={() => setColors([colorsRed[0], colors[1], colors[2]])}
              />
              <Button
                text={""}
                color={`rgb(${colorsGreen[0]})`}
                onPress={() =>
                  setColors([colors[0], colorsGreen[0], colors[2]])
                }
              />
              <Button
                text={""}
                color={`rgb(${colorsBlue[0]})`}
                onPress={() => setColors([colors[0], colors[1], colorsBlue[0]])}
              />
              <Button
                text={"4x"}
                color={"#d4d4d4"}
                onPress={() => setVelocity(0.25)}
              />
            </div>
            <div className="row">
              {/* <Button
                text={""}
                color={`rgb(${colorsRed[1]})`}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={`rgb(${colorsGreen[1]})`}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={`rgb(${colorsBlue[1]})`}
                onPress={() => console.log("oi")}
              />
              <Button
                text={"3x"}
                color={"#d4d4d4"}
                onPress={() => setVelocity(0.5)}
              /> */}
            </div>
            <div className="row">
              {/* <Button
                text={""}
                color={colorsRed[2]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={colorsGreen[2]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={colorsBlue[2]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={"2x"}
                color={"#d4d4d4"}
                onPress={() => setVelocity(1)}
              /> */}
            </div>
            <div className="row">
              {/* <Button
                text={""}
                color={colorsRed[3]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={colorsGreen[3]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={""}
                color={colorsBlue[3]}
                onPress={() => console.log("oi")}
              />
              <Button
                text={"1x"}
                color={"#d4d4d4"}
                onPress={() => setVelocity(2)}
              /> */}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
