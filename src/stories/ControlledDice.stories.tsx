import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ControlledCuteDice, generateRandomInt, DiceValues } from "../index";

export default {
  title: "ControlledDice",
  component: ControlledCuteDice,
} as Meta;

export const Controlled: Story = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const handleOnClick = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      setValue(generateRandomInt(1, 6) as DiceValues);
    }, 3000);
  };

  return (
    <>
      <div>Rolling: {`${rolling}`}</div>
      <div>Value: {value}</div>

      <ControlledCuteDice
        value={value}
        onClick={handleOnClick}
        isRolling={rolling}
      />
    </>
  );
};

export const Colors: Story = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const handleOnClick = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      setValue(generateRandomInt(1, 6) as DiceValues);
    }, 3000);
  };

  return (
    <>
      <div>Rolling: {`${rolling}`}</div>
      <div>Value: {value}</div>

      <ControlledCuteDice
        value={value}
        onClick={handleOnClick}
        isRolling={rolling}
        colors={{ 1: "black", 2: "blue", 3: "#ff87f9", 4: "#29d5db" }}
      />
    </>
  );
};
