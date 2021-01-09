import React, { useState, useEffect } from 'react';

export interface IInputFileProps {
  loaded: boolean;
  inputFile: any;
  zoom: number;
  audioState: string;
  noiseState: boolean;
  handleNoiseProfile: (start: number, stop: number) => void;
  handleZoomIn: () => void;
}

export function InputFile({
  loaded,
  inputFile,
  zoom,
  audioState,
  noiseState,
  handleNoiseProfile,
  handleZoomIn,
}: IInputFileProps) {
  const [waveForm, setWaveForm] = useState();
  const [url, setUrl] = useState('undefined');

  useEffect(() => {
    const Regions = require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
    const TimeLine = require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
    const Cursor = require('wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js');
    const WaveSurfer = require('wavesurfer.js');
    // Determine input file type
    let fileType: string;
    if (inputFile) {
      let type = inputFile.type.split('/');
      fileType = type[0];
    }
    let waveFormTemp = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      partialRender: true,
      container: '#waveform',
      backend: 'MediaElement',
      mediaType: fileType,
      regionsMinLength: 1,
      barHeight: 5,
      height: 300,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
      plugins: [
        Regions.create({
          regions: [
            {
              start: 1,
              end: 3,
              maxLength: 5,
              minLength: 0.5,
            },
          ],
          dragSelection: {
            slop: 5,
          },
        }),
        TimeLine.create({
          container: '#wave-timeline',
        }),
        // Cursor.create({
        //   showTime: true,
        //   opacity: 1,
        //   customShowTimeStyle: {
        //     'background-color': '#000',
        //     color: '#fff',
        //     'font-size': '10px',
        //   },
        // }),
      ],
    });
    const urlTemp = URL.createObjectURL(inputFile);
    waveFormTemp.load(urlTemp);
    setUrl(urlTemp);
    setWaveForm(waveFormTemp);
  }, [loaded]);

  useEffect(() => {
    if (waveForm !== undefined) waveForm.zoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (waveForm !== undefined) {
      switch (audioState) {
        case 'play':
          waveForm.playPause();
          break;
        case 'pause':
          waveForm.playPause();
          break;
        case 'stop':
          waveForm.stop();
          break;
        default:
          return;
      }
    }
  }, [audioState]);

  useEffect(() => {
    if (waveForm !== undefined) {
      const regions = waveForm.regions.list;
      const keys = Object.keys(regions);
      if (noiseState === true) {
        regions[keys[0]].play();
      } else {
        waveForm.stop();
      }
    }
  }, [noiseState]);

  useEffect(() => {
    if (waveForm !== undefined) {
      waveForm.on('ready', function () {
        if (waveForm.getDuration() >= 60) {
          handleZoomIn();
        }
      });

      waveForm.on('region-updated', function (region: any) {
        const regions = region.wavesurfer.regions.list;
        const keys = Object.keys(regions);
        if (keys.length > 1) {
          regions[keys[0]].remove();
          regions[keys[1]].maxLength = 5;
          regions[keys[1]].minLength = 0.5;
        }
      });
      waveForm.on('region-update-end', function (region: any) {
        let start = region.start;
        let end = region.end;
        if (end - start > 5) end = start + 5;
        handleNoiseProfile(
          Math.round(start * 10) / 10,
          Math.round(end * 10) / 10,
        );
      });

      setWaveForm(waveForm);
    }
  }, [waveForm]);

  return (
    <div className="inputfile_main">
      <div id="waveform"></div>
      <div id="wave-timeline"></div>
      <audio id="track" src={url} />
    </div>
  );
}
