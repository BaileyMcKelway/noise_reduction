import * as React from 'react';
import InstructionSteps from './InstructionStep';
import { instructionContent } from '../../content/instructions';

export default function InstructionStepsModMain() {
  return (
    <div className="instruction_steps_main">
      <h1>Instructions</h1>
      {instructionContent.map((ele) => (
        <InstructionSteps key={ele.id} content={ele} />
      ))}
    </div>
  );
}
