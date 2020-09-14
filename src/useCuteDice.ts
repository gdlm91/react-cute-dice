import { useState } from 'react';
import { generateRandomInt } from '.';
import { DiceValues } from './types';

export const useCuteDice = () => {
  const [value, setValue] = useState<DiceValues>(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceRoll = () => {
    const rolls = generateRandomInt(5, 15);

    for (let rollsLeft = rolls; rollsLeft >= 0; rollsLeft--) {
      setTimeout(() => {
        const newValue = generateRandomInt(1, 6) as DiceValues;
        const newIsRolling = rollsLeft > 0;
        setValue(newValue);
        setIsRolling(newIsRolling);
      }, 250 * (rolls - rollsLeft));
    }
  };

  const throwDice = () => {
    if (isRolling) return;
    return diceRoll();
  };

  return { value, isRolling, throwDice };
};
