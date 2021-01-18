import * as React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

export interface IRangeControlsProps {
  para: number;
  paraFunc: (event: any, newNumber: number | number[]) => void;
  min: number;
  max: number;
  type: string;
  reductionState: boolean;
  text: string;
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#0080ff',
    height: 2,
    width: 200,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
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
})(Slider);

// Slider controls for ffmpeg script
export function SliderUI({
  para,
  paraFunc,
  min,
  max,
  type,
  reductionState,
  text,
}: IRangeControlsProps) {
  const disable = reductionState === true ? true : false;
  return (
    <div className="slider_main">
      <IOSSlider
        id={type}
        value={para}
        onChange={paraFunc}
        aria-label="ios slider"
        min={min}
        max={max}
        step={0.2}
        disabled={disable}
      />
      <label htmlFor={type}>{text}</label>
      {/* <h5>{text}</h5> */}
    </div>
  );
}
