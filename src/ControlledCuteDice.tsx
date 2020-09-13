import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./CuteDice.css";
import { DiceValues } from "./types";
import { generateRandomInt } from "./utils/generateRandomInt";

interface Props {
  onClick: () => void;
  value: DiceValues;
  isRolling?: boolean;
  disabled?: boolean;
}

const ControlledCuteDice: React.FC<Props> = ({
  value,
  onClick,
  disabled = false,
  isRolling = false,
}) => {
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
    let interval: ReturnType<typeof setInterval>;

    if (isRolling === false) {
      setTimeout(() => {
        setRollingValue(undefined);
      });

      return;
    }

    interval = setInterval(() => {
      setRollingValue(generateRandomInt(1, 6) as DiceValues);
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [isRolling]);

  return (
    <div className="Dice">
      <button
        className={`dice d-${rollingValue || value}`}
        onClick={onClick}
        disabled={disabled}
      >
        {diceIcon[rollingValue || value || 1]}
      </button>
    </div>
  );
};

export default ControlledCuteDice;
