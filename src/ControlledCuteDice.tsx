import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './CuteDice.css';
import { Colors, DiceValues } from './types';
import { generateRandomInt } from './utils/generateRandomInt';

interface Props {
  onClick: () => void;
  value: DiceValues;
  isRolling?: boolean;
  disabled?: boolean;
  colors?: Colors;
}

const ControlledCuteDice: React.FC<Props> = ({ value, onClick, disabled = false, isRolling = false, colors = {} as Colors }) => {
  const diceIcon = {
    1: <FontAwesomeIcon icon={faDiceOne} />,
    2: <FontAwesomeIcon icon={faDiceTwo} />,
    3: <FontAwesomeIcon icon={faDiceThree} />,
    4: <FontAwesomeIcon icon={faDiceFour} />,
    5: <FontAwesomeIcon icon={faDiceFive} />,
    6: <FontAwesomeIcon icon={faDiceSix} />,
  };

  const [rollingValue, setRollingValue] = useState<DiceValues>();

  // Rolling logic
  useEffect(() => {
    if (isRolling === false) {
      setTimeout(() => {
        setRollingValue(undefined);
      });

      return;
    }

    const interval = setInterval(() => {
      setRollingValue(generateRandomInt(1, 6) as DiceValues);
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [isRolling]);

  const showingValue: DiceValues = rollingValue || value || 1;

  return (
    <div className="Dice">
      <button
        className={`dice d-${showingValue}`}
        style={colors[showingValue] ? { color: colors[showingValue] } : {}}
        onClick={onClick}
        disabled={disabled}
      >
        {diceIcon[showingValue]}
      </button>
    </div>
  );
};

export default ControlledCuteDice;
