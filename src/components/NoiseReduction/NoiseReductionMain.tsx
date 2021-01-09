import React, { useState, useRef } from 'react';
import { Slider } from './Slider';
import { FileView } from './InputFileView/FileView';
import { AudioControls } from './AudioControls';
import { ZoomControls } from './ZoomControls';
import { OutputFileView } from './OutputFileView/OutputFileView';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export interface IAppProps {
  Transcode: any;
}

function NoiseReduction(props: IAppProps) {
  const [nf, setNF] = useState(50);
  const [nr, setNR] = useState(12);
  const [zoom, setZoom] = useState(0);
  const [noiseProfile, setNoiseProfile] = useState([1.0, 3.0]);
  const [inputFile, setInputFile] = useState();
  const [outputFile, setOutputFile] = useState('');
  const [audioState, setAudioState] = useState('pause');
  const [noiseState, setNoiseState] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [finished, setFinished] = useState(false);
  const ffmpeg = createFFmpeg({
    corePath: 'https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js',
  });
  const [message, setMessage] = useState('Click Start to transcode');

  const timerRef = useRef(null);

  const handleChangeNF = (event) => {
    setNF(event.target.value);
  };

  const handleChangeNR = (event) => {
    setNR(event.target.value);
  };

  const handleFile = (file) => {
    setInputFile(file);
    setLoaded(true);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 10);
  };

  const handleZoomIn = () => {
    setZoom(zoom + 10);
  };

  const handlePlay = () => {
    setAudioState('play');
  };

  const handlePause = () => {
    setAudioState('pause');
  };

  const handleStop = () => {
    setAudioState('stop');
  };

  const handleNoiseProfile = (start, stop) => {
    setNoiseProfile([start, stop]);
  };

  const handleLearn = () => {
    clearTimeout(timerRef.current);
    const waitTime = (noiseProfile[1] - noiseProfile[0]) * 1000;
    timerRef.current = setTimeout(() => {
      setNoiseState(false);
    }, waitTime);
    setNoiseState(!noiseState);
  };

  const Transcode = async () => {
    setMessage('Loading ffmpeg-core.js');
    await ffmpeg.load();

    const name = inputFile !== undefined ? inputFile.name : null;

    ffmpeg.FS('writeFile', name, await fetchFile(inputFile));
    setMessage('Start transcoding');
    await ffmpeg.run(
      '-i',
      name,
      '-af',
      `asendcmd=c='${noiseProfile[0]} afftdn@n sn start; ${
        noiseProfile[1]
      } afftdn@n sn stop',afftdn@n afftdn=nr=${nr}:nf=${nf * -1}:rf=-75`,
      'out.wav',
    );
    setMessage('Complete transcoding');
    const data = ffmpeg.FS('readFile', 'out.wav');
    setOutputFile(
      URL.createObjectURL(new Blob([data.buffer], { type: 'audio/wav' })),
    );
    setFinished(true);
  };
  return (
    <div className="noise_reduction_main">
      <div className="noise_reduction_top">
        <AudioControls
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleStop={handleStop}
        />
        <ZoomControls
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
        />
      </div>
      <div>
        <FileView
          loaded={loaded}
          inputFile={inputFile}
          zoom={zoom}
          audioState={audioState}
          noiseState={noiseState}
          handleFile={handleFile}
          handleNoiseProfile={handleNoiseProfile}
          handleZoomIn={handleZoomIn}
        />
      </div>
      <div className="noise_reduction_bottom">
        <div className="reduction_controls">
          <Slider
            para={nf}
            paraFunc={handleChangeNF}
            min={80}
            max={20}
            type={'noise_floor'}
          />
          <div className="reduction_visualizer"></div>
          <Slider
            para={nr}
            paraFunc={handleChangeNR}
            min={0.01}
            max={97}
            type={'noise_reduction'}
          />
        </div>
        <br />
        <div className="progress">
          <p>{message}</p>
        </div>
        <div className="reduction_buttons">
          <button type="button" onClick={handleLearn}>
            Learn
          </button>
          <button type="submit" onClick={Transcode}>
            Submit
          </button>
        </div>
      </div>
      {finished === true && (
        <OutputFileView inputFile={inputFile} outputFile={outputFile} />
      )}
    </div>
  );
}

export default NoiseReduction;
