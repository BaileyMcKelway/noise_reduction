import * as React from 'react';

export interface IAudioControlsProps {
  handlePlay: () => void;
  handleStop: () => void;
  handlePause: () => void;
}

// Controls for play pause and stop state

export function AudioControls({
  handlePlay,
  handlePause,
  handleStop,
}: IAudioControlsProps) {
  return (
    <div>
      <button id="play_button" onClick={handlePlay}>
        Play
      </button>
      <button id="pause" onClick={handlePause}>
        Pause
      </button>
      <button id="stop_button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}
