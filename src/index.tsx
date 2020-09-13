import CuteDice from "./CuteDice";
import ControlledCuteDice from "./ControlledCuteDice";
import { generateRandomInt } from "./utils/generateRandomInt";
import { useCuteDice } from "./useCuteDice";
import { DiceValues as _DiceValues } from "./types";

export default CuteDice;
export { CuteDice, ControlledCuteDice, generateRandomInt, useCuteDice };
export type DiceValues = _DiceValues;
