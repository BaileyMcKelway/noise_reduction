import * as React from 'react';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import IconButton from '@material-ui/core/IconButton';

export interface IAudioControlsProps {
  handlePlay: () => void;
  handleStop: () => void;
  handlePause: () => void;
  reductionState: boolean;
  audioState: string;
}

// Controls for play pause and stop state

export function AudioControls({
  handlePlay,
  handlePause,
  handleStop,
  reductionState,
  audioState,
}: IAudioControlsProps) {
  const disable = reductionState === true ? true : false;
  const color = reductionState === true ? '#7a7a7a' : '#0080ff';
  let playColor = audioState === 'play' ? '#00cd00' : '#0080ff';
  if (color === '#7a7a7a') playColor = color;
  return (
    <div>
      <IconButton
        onClick={handlePlay}
        disabled={disable}
        style={{
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        }}
      >
        <PlayArrowRoundedIcon style={{ color: playColor }} />
      </IconButton>
      <IconButton
        onClick={handlePause}
        disabled={disable}
        style={{
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        }}
      >
        <PauseRoundedIcon style={{ color: color }} />
      </IconButton>
      <IconButton
        onClick={handleStop}
        disabled={disable}
        style={{
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        }}
      >
        <StopRoundedIcon style={{ color: color }} />
      </IconButton>
    </div>
  );
}
