import * as React from 'react';
import Paper from '@material-ui/core/Paper';

// Controls for zoom feature in WaveSurfer.js
export function Canvas() {
  return (
    <Paper elevation={1}>
      <div className="reduction_visualizer">
        <canvas id="foreGround" className="canvas" />
        <canvas id="midGround" className="canvas" />
        <canvas id="backGround" className="canvas" />
      </div>
    </Paper>
  );
}
