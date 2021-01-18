import * as React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface IButtonCompProps {
  func: () => void;
  color: string;
  classLabel: string;
  text: string | string[];
  active: boolean;
  animation: boolean;
  reductionState: boolean;
}

// Controls for zoom feature in WaveSurfer.js
export function ButtonComp({
  func,
  color,
  classLabel,
  text,
  active,
  animation,
  reductionState,
}: IButtonCompProps) {
  let primaryText = text;
  let secondaryText = null;
  if (Array.isArray(text)) {
    primaryText = text[0];
    secondaryText = text[1];
  } else {
    secondaryText = <CircularProgress size={24} />;
  }

  const disable = reductionState === true && active === false ? true : false;
  return (
    <div className="reduction_buttons">
      <Button
        color="primary"
        className={
          active === false
            ? `reduction_button ${classLabel}`
            : `reduction_button ${classLabel + '_active'}`
        }
        disabled={disable}
        onClick={func}
        style={{
          boxShadow:
            '0 3px 1px #aeaeae,0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        }}
        variant="contained"
      >
        {active === false ? primaryText : secondaryText}
      </Button>
    </div>
  );
}
