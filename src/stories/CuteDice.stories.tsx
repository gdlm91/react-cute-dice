import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CuteDice, { DiceValues } from '../index';

export default {
  title: 'CuteDice',
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

export const Colors: Story = () => {
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

      <CuteDice onChange={handleOnChange} colors={{ 1: 'black', 2: 'blue', 3: '#ff87f9', 4: '#29d5db' }} />
    </>
  );
};
