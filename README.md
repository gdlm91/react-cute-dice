# react-cute-dice

React cute dice is a library that gives you three ways to implement a dice. You can use a fully functional dice with a
cute design; use our cute dice and control it with your own logic, or use our useCuteDice hook and create your dice
with a custom look and feel without worrying about the functionality.

## Installation

### Using NPM

```shell
npm i --save react-cute-dice
```

### Using yarn

```shell
yarn add react-cute-dice
```

## Usage

### CuteDice

This is our fully functional cute dice, so easy to use!

```tsx
import React, { useState } from 'react';
import CuteDice, { DiceValues } from 'react-cute-dice';

export const ExampleDice: React.FC = () => {
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
```

Demo: https://gdlm91.github.io/react-cute-dice/?path=/story/cutedice--default

- **onChange**: a callback to be notified when the value of the dice changed and if it's rolling.
- **disabled** : (optional) sets the dice as disabled which means it won't roll if you click it.
- **colors**: (optional) an object with six colors, one for each number of the dice. This is optional, sinc the dice comes with default colors.
- **className**: (optional) if you ever need to customize the dice, or query for testing, set a class name to identify it.

### ControlledDice

Use this if you have your own way to calculate the next number of the dice, but still want our cute dice design:

```tsx
import React, { useState } from 'react';
import { ControlledCuteDice, DiceValues, generateRandomInt } from 'react-cute-dice';

export const ExampleControlledDice: React.FC = () => {
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

      <ControlledCuteDice value={value} onClick={handleOnClick} isRolling={rolling} />
    </>
  );
};
```

Demo: https://gdlm91.github.io/react-cute-dice/?path=/story/controlleddice--controlled

- **onClick**: a callback to execute when the dice is clicked.
- **value**: the value of the dice.
- **isRolling**: (optional) will make the dice roll and show a random number until is set to false.
- **disabled** : (optional) sets the dice as disabled which means it won't roll if you click it.
- **colors**: (optional) an object with six colors, one for each number of the dice. This is optional, sinc the dice comes with default colors.
- **className**: (optional) if you ever need to customize the dice, or query for testing, set a class name to identify it.

## useDice (Hook)

If you want to design your own dice but don't want to implement all the logic behind calculating the next number, use our hook!
It will return all the information you need (value, isRolling) and a method to calculate the next number.

```tsx
import React from 'react';
import { useCuteDice } from 'react-cute-dice';

export const ExampleCustomDice: React.FC = () => {
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
```
