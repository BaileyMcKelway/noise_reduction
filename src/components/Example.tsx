import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export interface IExampleProps {
  handleExample: () => void;
}

export default function Example({ handleExample }: IExampleProps) {
  return (
    <Paper elevation={1}>
      <button className="example_main" onClick={handleExample}>
        <h1>
          Or Try Example
          <span>
            <ArrowForwardIosRoundedIcon />
          </span>
        </h1>
      </button>
    </Paper>
  );
}
