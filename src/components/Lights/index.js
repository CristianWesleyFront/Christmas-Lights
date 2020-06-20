import React, { useMemo } from "react";

import colorsPallet from "../../utils/colors";

import { Lights } from "./styles";

export default function LightsComponent(props) {
  const {
    colors = {
      red: colorsPallet.red.hex,
      green: colorsPallet.green.hex,
      blue: colorsPallet.blue.hex,
    },
    amount = 30,
    onOff = false,
    speed = 1,
  } = props;

  let lightsArray = [];

  for (let i = 0; i < amount; i++) {
    lightsArray.push(i);
  }

  return (
    <Lights
      onOff={onOff}
      speed={speed}
      red={colors.red}
      green={colors.green}
      blue={colors.blue}
    >
      {lightsArray.map((e) => (
        <li key={`light${e}`} />
      ))}
    </Lights>
  );
}
