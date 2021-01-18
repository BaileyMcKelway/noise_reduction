import * as React from 'react';
import Paper from '@material-ui/core/Paper';

export interface IZoomControlsProps {}

// Controls for zoom feature in WaveSurfer.js
export function Canvas(props: IZoomControlsProps) {
  return (
    <Paper elevation={1}>
      <div className="reduction_visualizer">
        <canvas id="foreGround" className="canvas"></canvas>
        <canvas id="midGround" className="canvas"></canvas>
        <canvas id="backGround" className="canvas"></canvas>
      </div>
    </Paper>
  );
}
