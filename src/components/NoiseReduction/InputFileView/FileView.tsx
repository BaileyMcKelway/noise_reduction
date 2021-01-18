import React from 'react';
import { InputFile } from './InputFile';
import Paper from '@material-ui/core/Paper';

export interface IFileViewProps {
  load: string;
  loaded: boolean;
  inputFile: any;
  zoom: number;
  nf: number;
  audioState: string;
  noiseState: boolean;
  handleLoaded: () => void;
  handlePause: () => void;
  handleNoiseProfile: (start: number, stop: number) => void;
  handleZoomIn: () => void;
  example: boolean;
}

export function FileView({
  load,
  loaded,
  inputFile,
  zoom,
  nf,
  audioState,
  noiseState,
  handleLoaded,
  handlePause,
  handleNoiseProfile,
  handleZoomIn,
  example,
}: IFileViewProps) {
  return (
    <Paper elevation={3}>
      <div className="fileview_main">
        {load === 'loading' && (
          <div className="loading_file">
            <div className="dot-pulse"></div>
          </div>
        )}
        <InputFile
          loaded={loaded}
          inputFile={inputFile}
          zoom={zoom}
          nf={nf}
          audioState={audioState}
          noiseState={noiseState}
          handleLoaded={handleLoaded}
          handlePause={handlePause}
          handleNoiseProfile={handleNoiseProfile}
          handleZoomIn={handleZoomIn}
          example={example}
        />
      </div>
    </Paper>
  );
}
