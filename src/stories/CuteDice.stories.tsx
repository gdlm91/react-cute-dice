import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import CuteDice, {
  ControlledCuteDice,
  generateRandomInt,
  DiceValues,
} from "../index";

export default {
  title: "CuteDice",
  component: CuteDice,
} as Meta;

export const Default: Story = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const handleOnChange = (value: DiceValues, rolling: boolean) => {
    setValue(value);
    setRolling(rolling);
  };

  return (
    <>
      <div>Rolling: {`${rolling}`}</div>
      <div>Value: {value}</div>

      <CuteDice onChange={handleOnChange} />
    </>
  );
};

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
