import React, { useState, useRef, useEffect } from 'react';
import { SliderUI } from './Slider';
import { FileView } from './InputFileView/FileView';
import { AudioControls } from './AudioControls';
import { ZoomControls } from './ZoomControls';
import { OutputFileView } from './OutputFileView/OutputFileView';
import { Canvas } from './Canvas';
import ExampleInstructions from './ExampleInstructions';
import Reset from './Reset';
import { ButtonComp } from './ButtonComp';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export interface INoiseReductionProps {
  load: string;
  inputFile: any;
  handleFile: (file: any) => void;
  handleLoaded: () => void;
  handleEmpty: () => void;
  example: boolean;
}

function NoiseReduction({
  load,
  inputFile,
  handleFile,
  handleLoaded,
  handleEmpty,
  example,
}: INoiseReductionProps) {
  const [nf, setNF] = useState(30);
  const [nr, setNR] = useState(70);
  const [zoom, setZoom] = useState(0);
  const [noiseProfile, setNoiseProfile] = useState([1.0, 3.0]);
  const [outputFile, setOutputFile] = useState('');
  const [audioState, setAudioState] = useState('pause');
  const [noiseState, setNoiseState] = useState(false);
  const [reductionState, setReductionState] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ffmpeg = createFFmpeg();
  const [message, setMessage] = useState('Click Start to transcode');

  const timerRef = useRef(null);

  useEffect(() => {
    if (example === true) {
      setNR(80);
      setNF(25);
      setNoiseProfile([14.0288210486741, 14.923252993905896]);
    }
  }, []);
  const handleChangeNF = (event: any, newValue: number | number[]) => {
    setNF(newValue as number);
  };

  const handleChangeNR = (event: any, newValue: number | number[]) => {
    setNR(newValue as number);
  };

  const handleZoomIn = () => {
    setZoom(20);
  };

  const handleZoom = (event: any, newValue: number | number[]) => {
    setZoom(newValue as number);
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
    setReductionState(true);
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
    setReductionState(false);
  };
  return (
    <div className="noise_reduction_main">
      <div className="noise_reduction_top">
        <AudioControls
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleStop={handleStop}
          reductionState={reductionState}
          audioState={audioState}
        />
        <div className="noise_reduction_top_left">
          <ZoomControls
            handleZoom={handleZoom}
            zoom={zoom}
            reductionState={reductionState}
          />
          <Reset handleEmpty={handleEmpty} />
        </div>
      </div>
      <div>
        <FileView
          load={load}
          loaded={loaded}
          inputFile={inputFile}
          zoom={zoom}
          nf={nf}
          audioState={audioState}
          noiseState={noiseState}
          handleNoiseProfile={handleNoiseProfile}
          handleZoomIn={handleZoomIn}
          handleLoaded={handleLoaded}
          handlePause={handlePause}
          example={example}
        />
      </div>
      <div className="noise_reduction_bottom">
        <div className="reduction_controls">
          <div className="reduction_controls_left">
            <SliderUI
              para={nf}
              paraFunc={handleChangeNF}
              min={20}
              max={80}
              type={'noise_floor'}
              reductionState={reductionState}
              text={'Noise Floor'}
            />
            <ButtonComp
              func={handleLearn}
              color={'secondary'}
              classLabel={'learn'}
              text={['Learn', 'X']}
              active={noiseState}
              animation={false}
              reductionState={reductionState}
            />
          </div>
          <Canvas />
          <SliderUI
            para={nr}
            paraFunc={handleChangeNR}
            min={0.01}
            max={97}
            type={'noise_reduction'}
            reductionState={reductionState}
            text={'Noise Reduction'}
          />
        </div>
        <div className="progress">
          <p>{message}</p>
        </div>
        <ButtonComp
          func={Transcode}
          color={'primary'}
          classLabel={'generate'}
          text={'Generate'}
          active={reductionState}
          animation={true}
          reductionState={reductionState}
        />
      </div>
      {example && <ExampleInstructions />}
      {finished === true && (
        <OutputFileView inputFile={inputFile} outputFile={outputFile} />
      )}
    </div>
  );
}

export default NoiseReduction;
