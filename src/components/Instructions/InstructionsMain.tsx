import * as React from 'react';
import InstructionStepsModMain from './InstructionSteps';

export interface IInstructionMainProps {}

export default function InstructionMain(props: IInstructionMainProps) {
  return (
    <div className="instruction_main">
      <InstructionStepsModMain />
    </div>
  );
}
