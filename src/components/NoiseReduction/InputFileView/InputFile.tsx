import React, { useState, useEffect, useRef } from 'react';

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
  const [waveForm, setWaveForm] = useState(null);
  const [url, setUrl] = useState(null);
  const [foreGroundCanavas, setForeGroundCanavs] = useState(null);
  const [backGroundCanvas, setBackgroundCanvas] = useState(null);
  // const [id, setId] = useState(null);
  const primaryId = useRef<number>();
  const secondaryId = useRef<any>();
  const [noiseProfile, setNoiseProfile] = useState({
    noiseProfileData: [],
    count: 0,
  });

  useEffect(() => {
    const Regions = require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
    const TimeLine = require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
    const WaveSurfer = require('wavesurfer.js');
    // Determine input file type
    let fileType: string;
    if (inputFile) {
      let type = inputFile.type.split('/');
      fileType = type[0];
    }
    let waveForm = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      partialRender: true,
      container: '#waveform',
      backend: 'MediaElementWebAudio',
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
      ],
    });
    const url = URL.createObjectURL(inputFile);
    waveForm.load(url);
    setUrl(url);
    setWaveForm(waveForm);
  }, [loaded]);

  useEffect(() => {
    if (waveForm) waveForm.zoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (waveForm) {
      if (audioState == 'play') {
        waveForm.playPause();
        const ctx = backGroundCanvas.getContext('2d');

        const analyser = waveForm.backend.ac.createAnalyser();
        waveForm.backend.setFilter(analyser);

        analyser.fftSize = 16384;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const WIDTH = backGroundCanvas.width;
        const HEIGHT = backGroundCanvas.height;
        const barWidth = (WIDTH / bufferLength) * 13;

        let barHeight: number;
        let x = 0;

        function renderFrame() {
          primaryId.current = requestAnimationFrame(renderFrame);

          x = 0;
          analyser.getByteFrequencyData(dataArray);
          // console.log('MAIN PLAY', dataArray);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, WIDTH, HEIGHT);

          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgb(0, 0, 0)';

          ctx.beginPath();
          let bars = 118;

          for (let i = 0; i < bars; i++) {
            barHeight = dataArray[i] * 0.3;
            if (i === 0) {
              ctx.moveTo(x, HEIGHT - barHeight);
            } else {
              ctx.lineTo(x, HEIGHT - barHeight);
            }
            x += barWidth + 2.2;
          }
          ctx.stroke();
        }
        renderFrame();
      } else if (audioState == 'pause') {
        waveForm.playPause();
        cancelAnimationFrame(primaryId.current);
      } else {
        waveForm.stop();
        cancelAnimationFrame(primaryId.current);
      }
    }
  }, [audioState]);

  useEffect(() => {
    if (waveForm) {
      const regions = waveForm.regions.list;
      const keys = Object.keys(regions);

      if (noiseState === true) {
        regions[keys[0]].play();
        const analyser = waveForm.backend.ac.createAnalyser();
        waveForm.backend.setFilter(analyser);

        analyser.fftSize = 16384;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        let averageDataArray = new Uint8Array(8192).fill(0);
        let count = 0;

        secondaryId.current = setInterval(function () {
          analyser.getByteFrequencyData(dataArray);
          for (let i = 0; i < dataArray.length; i++) {
            averageDataArray[i] += dataArray[i];
          }
          count++;
          setNoiseProfile({
            noiseProfileData: averageDataArray,
            count: count,
          });
        }, 100);
      } else {
        waveForm.stop();
        clearInterval(secondaryId.current);

        const noiseProfileAverage = noiseProfile.noiseProfileData.map((ele) => {
          return ele / noiseProfile.count;
        });
        const ctx = foreGroundCanavas.getContext('2d');

        const WIDTH = backGroundCanvas.width;
        const HEIGHT = backGroundCanvas.height;
        const barWidth = (WIDTH / 8192) * 13;

        let barHeight: number;
        let x = 0;

        renderFrame();

        function renderFrame() {
          x = 0;

          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, WIDTH, HEIGHT);

          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgb(0, 0, 0)';

          ctx.beginPath();
          let bars = 118;

          for (let i = 0; i < bars; i++) {
            barHeight = noiseProfileAverage[i];
            if (i === 0) {
              ctx.moveTo(x, HEIGHT - barHeight);
            } else {
              ctx.lineTo(x, HEIGHT - barHeight);
            }
            x += barWidth + 2.2;
          }
          ctx.stroke();
        }
      }
    }
  }, [noiseState]);

  useEffect(() => {
    if (waveForm) {
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

  useEffect(() => {
    const canvas = document.getElementsByClassName('canvas');
    setBackgroundCanvas(canvas[0]);
    setForeGroundCanavs(canvas[1]);
  }, []);

  return (
    <div className="inputfile_main">
      <div id="waveform"></div>
      <div id="wave-timeline"></div>
      <audio id="track" src={url} />
    </div>
  );
}
