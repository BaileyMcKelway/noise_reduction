import * as React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

export interface IBackProps {
  handleBack: () => void;
}

export default function Back({ handleBack }: IBackProps) {
  return (
    <aside>
      <Button variant="contained" onClick={handleBack}>
        <ArrowBackRoundedIcon fontSize="large" />
      </Button>
    </aside>
  );
}
