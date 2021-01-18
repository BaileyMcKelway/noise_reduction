import * as React from 'react';
import BulletPoint from './BulletPoint';
import { bulletpointContent } from '../../content/bulletpoints';
export interface IInstructionModMainProps {}

export default function InstructionModMain(props: IInstructionModMainProps) {
  return (
    <div className="bulletpoints__main">
      {bulletpointContent.map((ele, index) => {
        return <BulletPoint key={index} content={ele} num={index + 1} />;
      })}
    </div>
  );
}
