import * as React from 'react';

export interface IRangeControlsProps {
  para: number;
  paraFunc: (event: any) => void;
  min: number;
  max: number;
  type: string;
}

// Slider controls for ffmpeg script
export function Slider({
  para,
  paraFunc,
  min,
  max,
  type,
}: IRangeControlsProps) {
  return (
    <div>
      <label htmlFor="noise_floor">{type}</label>
      <input
        type="range"
        id={type}
        min={min}
        max={max}
        value={para}
        onChange={paraFunc}
        step={0.2}
      ></input>
    </div>
  );
}
