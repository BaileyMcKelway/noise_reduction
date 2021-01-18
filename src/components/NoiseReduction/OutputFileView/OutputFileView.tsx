import React, { useState, useEffect } from 'react';
import OutputFilePlayer from './OutputFilePlayer';
export interface IOutputFileViewProps {
  inputFile: any;
  outputFile: any;
}

export function OutputFileView({
  inputFile,
  outputFile,
}: IOutputFileViewProps) {
  const [load, setLoad] = useState(true);
  inputFile = URL.createObjectURL(inputFile);

  const handleLoad = (val: boolean) => {
    setLoad(val);
  };

  return (
    <div className="outputfile_main">
      <h5>Old File</h5>
      <div className="outfile_player">
        {load === true && (
          <div className="loading_file">
            <div className="dot-pulse"></div>
          </div>
        )}
        <OutputFilePlayer
          outputFile={inputFile}
          id={'oldFile'}
          handleLoad={handleLoad}
        />
      </div>
      <h5>New File</h5>
      <div className="outfile_player">
        {load === true && (
          <div className="loading_file">
            <div className="dot-pulse"></div>
          </div>
        )}
        <OutputFilePlayer
          outputFile={outputFile}
          id={'newFile'}
          handleLoad={handleLoad}
        />
      </div>
    </div>
  );
}
