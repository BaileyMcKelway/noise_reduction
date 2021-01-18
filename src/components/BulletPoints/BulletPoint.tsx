import * as React from 'react';

export interface IBulletPointProps {
  num: number;
  content: any;
}

export default function BulletPoint({ content, num }: IBulletPointProps) {
  return (
    <div className={`instruction_mod grid-${num}`}>
      <p className="instruction_mod_content">{content.text}</p>
    </div>
  );
}
