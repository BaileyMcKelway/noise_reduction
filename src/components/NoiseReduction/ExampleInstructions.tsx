import * as React from 'react';

export interface IExampleInstructionsProps {}

export default function ExampleInstructions(props: IExampleInstructionsProps) {
  return (
    <div className="example_instructions">
      <h2>Example</h2>
      <h3>
        Everything is already set all you have to do is click "Generate" above!
      </h3>
    </div>
  );
}
