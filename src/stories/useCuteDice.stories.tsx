import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { useCuteDice } from '../index';

export default {
  title: 'useDice',
  //   component: useDice,
} as Meta;

export const Hook: Story = () => {
  const { value, isRolling, throwDice } = useCuteDice();
  return (
    <>
      <div>Rolling: {`${isRolling}`}</div>
      <div>Value: {value}</div>
      <button onClick={throwDice} disabled={isRolling}>
        {value}
      </button>
    </>
  );
};
