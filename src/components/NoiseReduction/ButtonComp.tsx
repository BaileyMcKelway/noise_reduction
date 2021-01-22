import * as React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface IButtonCompProps {
  func: () => void;
  classLabel: string;
  text: string | string[];
  active: boolean;
  reductionState: boolean;
}

// Controls for zoom feature in WaveSurfer.js
export function ButtonComp({
  func,
  classLabel,
  text,
  active,
  reductionState,
}: IButtonCompProps) {
  let primaryText = text;
  let secondaryText = null;
  if (Array.isArray(text)) {
    [primaryText, secondaryText] = text;
  } else {
    secondaryText = <CircularProgress size={24} />;
  }

  const disable = reductionState && active;

  const className = active
    ? `reduction_button ${classLabel}_active`
    : `reduction_button ${classLabel}`;
  return (
    <div className="reduction_buttons">
      <Button
        color="primary"
        className={className}
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
