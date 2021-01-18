import * as React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';

export interface IZoomControlsProps {
  handleZoom: (event: any, newNumber: number | number[]) => void;
  zoom: number;
  reductionState: boolean;
}
const ZoomSlider = withStyles({
  root: {
    color: '#000000',
    height: 2,
    width: 45,
    padding: '15px 0',
  },
  active: {},
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  thumb: {
    backgroundColor: '#040404e0e',
  },
})(Slider);
const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

// Controls for zoom feature in WaveSurfer.js
export function ZoomControls({
  handleZoom,
  zoom,
  reductionState,
}: IZoomControlsProps) {
  const disable = reductionState === true ? true : false;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ZoomOutIcon />
      <ZoomSlider
        disabled={disable}
        value={zoom}
        step={10}
        min={0}
        max={500}
        onChange={handleZoom}
        aria-labelledby="continuous-slider"
        color={'primary'}
      />
      <ZoomInIcon />
    </div>
  );
}
