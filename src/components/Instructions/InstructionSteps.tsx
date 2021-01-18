import * as React from 'react';
import InstructionSteps from './InstructionStep';
import { instructionContent } from '../../content/instructions';
export interface IInstructionStepsModMainProps {}

export default function InstructionStepsModMain(
  props: IInstructionStepsModMainProps,
) {
  return (
    <div className="instruction_steps_main">
      <h1>Instructions</h1>
      {instructionContent.map((ele, index) => {
        return <InstructionSteps key={index} content={ele} />;
      })}
    </div>
  );
}
