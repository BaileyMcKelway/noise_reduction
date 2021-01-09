import * as React from 'react';

export interface IOutputFileViewProps {
  inputFile: any;
  outputFile: any;
}

export function OutputFileView({
  inputFile,
  outputFile,
}: IOutputFileViewProps) {
  inputFile = URL.createObjectURL(inputFile);
  return (
    <div>
      <div>
        <h5>Old File</h5>
        <audio src={inputFile} controls></audio>
      </div>
      <div>
        <h5>New File</h5>
        <audio src={outputFile} controls></audio>
      </div>
    </div>
  );
}
