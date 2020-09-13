import React, { useState, useEffect } from "react";
import ControlledCuteDice from "./ControlledCuteDice";
import { DiceValues } from "./types";
import { generateRandomInt } from "./utils/generateRandomInt";

interface Props {
  onChange?: (value: DiceValues, rolling: boolean) => void;
  disabled?: boolean;
}

const CuteDice: React.FC<Props> = ({ onChange, disabled = false }) => {
  const [value, setValue] = useState<DiceValues>(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceRoll = () => {
    let rolls = generateRandomInt(5, 15);

    for (let rollsLeft = rolls; rollsLeft >= 0; rollsLeft--) {
      setTimeout(() => {
        const newValue = generateRandomInt(1, 6) as DiceValues;
        const newIsRolling = rollsLeft > 0;
        setValue(newValue);
        setIsRolling(newIsRolling);

        onChange && onChange(newValue, newIsRolling);
      }, 250 * (rolls - rollsLeft));
    }
  };

  const handleDiceThrow = () => {
    if (isRolling) return;
    return diceRoll();
  };

  return (
    <ControlledCuteDice
      value={value}
      disabled={disabled}
      onClick={handleDiceThrow}
    />
  );
};

export default CuteDice;
