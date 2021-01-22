import * as React from 'react';
import BulletPoint from './BulletPoint';
import { bulletpointContent } from '../../content/bulletpoints';

export default function InstructionModMain() {
  return (
    <div className="bulletpoints__main">
      {bulletpointContent.map((ele) => (
        <BulletPoint key={ele.id} content={ele} num={ele.id} />
      ))}
    </div>
  );
}
