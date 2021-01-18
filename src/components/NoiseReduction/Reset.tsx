import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';
export interface IResetProps {
  handleEmpty: () => void;
}

export default function Reset({ handleEmpty }: IResetProps) {
  return (
    <div>
      <IconButton color="default" aria-label="reset file" onClick={handleEmpty}>
        <RotateLeftRoundedIcon />
      </IconButton>
    </div>
  );
}
