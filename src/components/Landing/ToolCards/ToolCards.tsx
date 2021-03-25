import * as React from 'react';
import ToolCard from './ToolCard';
import { toolsContent } from '../../../content/tools';

export default function ToolCards() {
  return (
    <div className="toolcards">
      {toolsContent.map((content) => (
        <ToolCard key={content.id} content={content} />
      ))}
    </div>
  );
}
