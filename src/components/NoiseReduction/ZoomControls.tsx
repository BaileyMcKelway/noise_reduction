import * as React from 'react';

export interface IZoomControlsProps {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}

// Controls for zoom feature in WaveSurfer.js
export function ZoomControls({
  handleZoomIn,
  handleZoomOut,
}: IZoomControlsProps) {
  return (
    <div>
      <button id="zoom_in" onClick={handleZoomIn}>
        +
      </button>
      <button id="zoom_out" onClick={handleZoomOut}>
        -
      </button>
    </div>
  );
}
