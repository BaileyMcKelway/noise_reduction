import * as React from 'react';

export interface IInstructionStepsModProps {
  content: any;
}

export default function InstructionStepsMod({
  content,
}: IInstructionStepsModProps) {
  return (
    <div className="step_mod_main">
      <div className="step_mod_number">{content.num}</div>
      <div className="step_mod_content">
        <div>
          <h3 className="step_mod_title">{content.title}</h3>
          {content.content}
        </div>
      </div>
    </div>
  );
}
