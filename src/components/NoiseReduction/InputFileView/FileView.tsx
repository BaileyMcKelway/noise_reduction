import * as React from 'react';
import { InputFile } from './InputFile';
import { LoadInput } from './LoadInput';

export interface IFileViewProps {
  loaded: boolean;
  inputFile: any;
  zoom: number;
  audioState: string;
  noiseState: boolean;
  handleFile: (files) => void;
  handleNoiseProfile: (start: number, stop: number) => void;
  handleZoomIn: () => void;
}

export function FileView({
  loaded,
  inputFile,
  zoom,
  audioState,
  noiseState,
  handleFile,
  handleNoiseProfile,
  handleZoomIn,
}: IFileViewProps) {
  if (loaded) {
    return (
      <div className="fileview_main">
        <InputFile
          loaded={loaded}
          inputFile={inputFile}
          zoom={zoom}
          audioState={audioState}
          noiseState={noiseState}
          handleNoiseProfile={handleNoiseProfile}
          handleZoomIn={handleZoomIn}
        />
      </div>
    );
  } else {
    return (
      <div className="fileview_main">
        <LoadInput handleFile={handleFile} />
      </div>
    );
  }
}
