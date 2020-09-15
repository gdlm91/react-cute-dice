import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { Colors, DiceValues } from './types';
import { generateRandomInt } from './utils/generateRandomInt';

interface Props {
  onClick: () => void;
  value: DiceValues;
  isRolling?: boolean;
  disabled?: boolean;
  colors?: Colors;
  className?: string;
}

const ControlledCuteDice: React.FC<Props> = ({
  value,
  onClick,
  disabled = false,
  isRolling = false,
  colors = {} as Colors,
  className = '',
}) => {
  const diceIcon = {
    1: <FontAwesomeIcon icon={faDiceOne} />,
    2: <FontAwesomeIcon icon={faDiceTwo} />,
    3: <FontAwesomeIcon icon={faDiceThree} />,
    4: <FontAwesomeIcon icon={faDiceFour} />,
    5: <FontAwesomeIcon icon={faDiceFive} />,
    6: <FontAwesomeIcon icon={faDiceSix} />,
  };

  const style = {
    background: 'none',
    border: 'none',
    fontSize: '60px',
    transitionDuration: ' 0.2s',
    transitionProperty: 'color',
  };

  const defaultColors = {
    1: '#a405d4',
    2: '#34ebff',
    3: '#00d51b',
    4: '#f6db35',
    5: '#f88400',
    6: '#df3100',
  };

  const mergedColors = { ...defaultColors, ...colors };

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
    <button className={className} style={{ ...style, color: mergedColors[showingValue] }} onClick={onClick} disabled={disabled}>
      {diceIcon[showingValue]}
    </button>
  );
};

export default ControlledCuteDice;
