import React, { useState, useEffect, useRef } from 'react';

export interface IInputFileProps {
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

export interface INoiseProfile {
  noiseProfileData: Uint8Array;
  count: number;
}

export function InputFile({
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
}: IInputFileProps) {
  const [waveForm, setWaveForm] = useState(null);
  const [url, setUrl] = useState(null);
  const [foreGroundCanavas, setForeGroundCanavs] = useState(null);
  const [midGroundCanavas, setMidGroundCanavs] = useState(null);
  const [backGroundCanvas, setBackgroundCanvas] = useState(null);
  const primaryId = useRef<number>();
  const secondaryId = useRef<any>();
  const [noiseProfile, setNoiseProfile] = useState<INoiseProfile>({
    noiseProfileData: new Uint8Array(),
    count: 0,
  });

  useEffect(() => {
    const canvases = document.getElementsByClassName('canvas');
    setForeGroundCanavs(canvases[0]);
    setMidGroundCanavs(canvases[1]);
    setBackgroundCanvas(canvases[2]);
  }, []);

  useEffect(() => {
    const Regions = require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
    const Cursor = require('wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js');
    const TimeLine = require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
    const WaveSurfer = require('wavesurfer.js');

    let regionStart = 1;
    let regionEnd = 3;
    if (example === true) {
      regionStart = 14.0288210486741;
      regionEnd = 14.923252993905896;
    }
    let waveForm = WaveSurfer.create({
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      mediaType: 'audio',
      regionsMinLength: 0.25,
      barHeight: 5,
      partialRender: true,
      height: 300,
      progressColor: '#6c7361',
      responsive: true,
      waveColor: '#c6d2b3',
      cursorColor: 'transparent',
      normalize: true,
      plugins: [
        Regions.create({
          regions: [
            {
              start: regionStart,
              end: regionEnd,
              maxLength: 5,
              minLength: 0.25,
              color: 'rgba(255, 0, 0, 0.1)',
            },
          ],
          dragSelection: {
            slop: 5,
          },
        }),
        TimeLine.create({
          container: '#wave-timeline',
        }),
        Cursor.create({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            'background-color': '#000',
            color: '#fff',
            padding: '2px',
            'font-size': '10px',
          },
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
    if (noiseProfile.noiseProfileData.length > 0) {
      const noiseProfileAverage = noiseProfile.noiseProfileData;
      const ctx = midGroundCanavas.getContext('2d');

      const WIDTH = midGroundCanavas.width;
      const HEIGHT = midGroundCanavas.height;
      const barWidth = WIDTH / 4096;

      let barHeight: number;
      let x = 0;

      x = 0;

      const noiseFloor = nf > 50 ? nf - 50 : nf - 50;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      ctx.lineWidth = 1;
      if (nf > 50) {
        ctx.strokeStyle = 'rgb(255, 55, 0)';
      } else {
        ctx.strokeStyle = 'rgb(17, 255, 0)';
      }

      ctx.beginPath();
      let bars = 4096;

      for (let i = 0; i < bars; i += 16) {
        const noiseProfileCurr: any = noiseProfileAverage[i];
        barHeight = noiseProfileCurr * 0.5 + noiseFloor;

        if (i === 0) {
          ctx.moveTo(x * 4, HEIGHT - barHeight);
        } else {
          ctx.lineTo(x * 4, HEIGHT - barHeight);
        }
        x += barWidth * 16;
      }
      ctx.stroke();
    }
  }, [nf]);

  useEffect(() => {
    if (noiseProfile.noiseProfileData.length > 0) {
      const noiseProfileAverage = noiseProfile.noiseProfileData;
      const ctx = foreGroundCanavas.getContext('2d');

      const WIDTH = foreGroundCanavas.width;
      const HEIGHT = backGroundCanvas.height;
      const barWidth = WIDTH / 4096;

      let barHeight: number;
      let x = 0;

      x = 0;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgb(0, 0, 0)';

      ctx.beginPath();
      ctx.setLineDash([2, 3]);
      let bars = 4096;

      for (let i = 0; i < bars; i += 16) {
        const noiseProfileCurr: any = noiseProfileAverage[i];
        barHeight = noiseProfileCurr * 0.5;

        if (i === 0) {
          ctx.moveTo(x * 4, HEIGHT - barHeight);
        } else {
          ctx.lineTo(x * 4, HEIGHT - barHeight);
        }
        x += barWidth * 16;
      }
      ctx.stroke();
    }
  }, [noiseProfile]);

  useEffect(() => {
    let ctxBack;
    let analyser;
    let bufferLength;
    let dataArray;
    let WIDTH;
    let HEIGHT;
    let barWidth;
    let barHeight;
    let x = 0;
    if (backGroundCanvas) {
      ctxBack = backGroundCanvas.getContext('2d');
      analyser = waveForm.backend.ac.createAnalyser();
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      WIDTH = backGroundCanvas.width;
      HEIGHT = backGroundCanvas.height;
      barWidth = WIDTH / bufferLength;
    }

    function renderFrame() {
      primaryId.current = requestAnimationFrame(renderFrame);

      x = 0;
      analyser.getByteFrequencyData(dataArray);

      ctxBack.fillStyle = ' rgb(251, 251, 251)';
      ctxBack.fillRect(0, 0, WIDTH, HEIGHT);

      ctxBack.lineWidth = 0.5;
      ctxBack.strokeStyle = 'rgba(255, 149, 0, 0.716)';

      ctxBack.beginPath();
      let bars = 4096;

      for (let i = 20; i < bars; i += 16) {
        barHeight = dataArray[i] * 0.5;
        if (i === 0) {
          ctxBack.moveTo(x * 4, HEIGHT - barHeight);
        } else {
          ctxBack.lineTo(x * 4, HEIGHT - barHeight);
        }
        x += barWidth * 16;
      }
      ctxBack.stroke();
    }

    if (waveForm) {
      if (audioState === 'play') {
        waveForm.play();

        waveForm.backend.setFilter(analyser);

        analyser.fftSize = 8192;

        renderFrame();
      } else if (audioState == 'pause') {
        waveForm.pause();
        cancelAnimationFrame(primaryId.current);
      } else {
        waveForm.stop();
        cancelAnimationFrame(primaryId.current);
      }
    }
  }, [audioState]);

  useEffect(() => {
    const noiseProfileAverage = noiseProfile.noiseProfileData;
    let ctx;

    let WIDTH;
    let HEIGHT;
    let barWidth;

    let barHeight: number;
    let x = 0;
    if (foreGroundCanavas) {
      ctx = foreGroundCanavas.getContext('2d');

      WIDTH = foreGroundCanavas.width;
      HEIGHT = foreGroundCanavas.height;
      barWidth = WIDTH / 4096;
    }

    function renderFrame() {
      x = 0;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgb(0, 0, 0)';

      ctx.beginPath();
      ctx.setLineDash([2, 3]);
      let bars = 4096;

      for (let i = 0; i < bars; i += 16) {
        const noiseProfileCurr: any = noiseProfileAverage[i];
        barHeight = noiseProfileCurr * 0.5;

        if (i === 0) {
          ctx.moveTo(x * 4, HEIGHT - barHeight);
        } else {
          ctx.lineTo(x * 4, HEIGHT - barHeight);
        }
        x += barWidth * 16;
      }
      ctx.stroke();
    }
    if (waveForm) {
      const regions = waveForm.regions.list;
      const keys = Object.keys(regions);

      if (noiseState === true) {
        regions[keys[0]].play();
        const analyser = waveForm.backend.ac.createAnalyser();
        waveForm.backend.setFilter(analyser);

        analyser.fftSize = 8192;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        noiseProfile.noiseProfileData = new Uint8Array(bufferLength).fill(0);

        secondaryId.current = setInterval(function () {
          analyser.getByteFrequencyData(dataArray);

          setNoiseProfile({
            noiseProfileData: dataArray,
            count: noiseProfile.count,
          });
        }, 100);
      } else {
        waveForm.stop();
        clearInterval(secondaryId.current);
        const ctxMid = midGroundCanavas.getContext('2d');
        ctxMid.clearRect(0, 0, WIDTH, HEIGHT);
        const WIDTH_MID = backGroundCanvas.width;
        const HEIGHT_MID = backGroundCanvas.height;

        x = 0;

        const noiseFloor = nf > 50 ? nf - 50 : nf - 50;
        ctxMid.clearRect(0, 0, WIDTH_MID, HEIGHT_MID);

        ctxMid.lineWidth = 1;
        if (nf > 50) {
          ctxMid.strokeStyle = 'rgb(255, 55, 0)';
        } else {
          ctxMid.strokeStyle = 'rgb(17, 255, 0)';
        }

        ctxMid.beginPath();
        let bars = 4096;

        for (let i = 0; i < bars; i += 16) {
          const noiseProfileCurr: any = noiseProfileAverage[i];
          barHeight = noiseProfileCurr * 0.5 + noiseFloor;
          if (i === 0) {
            ctxMid.moveTo(x * 4, HEIGHT - barHeight);
          } else {
            ctxMid.lineTo(x * 4, HEIGHT - barHeight);
          }
          x += barWidth * 16;
        }
        ctxMid.stroke();

        renderFrame();
      }
    }
  }, [noiseState]);

  useEffect(() => {
    if (waveForm) {
      waveForm.on('ready', function () {
        handleLoaded();
        handleZoomIn();
      });

      waveForm.on('region-updated', function (region: any) {
        const regions = region.wavesurfer.regions.list;
        const keys = Object.keys(regions);
        if (keys.length > 1) {
          regions[keys[0]].remove();
          regions[keys[1]].maxLength = 5;
          regions[keys[1]].minLength = 0.25;
          regions[keys[1]].color = 'rgba(255, 0, 38, 0.1)';
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

  if (waveForm) {
    waveForm.on('pause', function () {
      if (audioState === 'play') {
        handlePause();
      }
    });
  }

  return (
    <div className="inputfile_main">
      <div id="waveform"></div>
      <div id="wave-timeline"></div>
      <audio id="track" src={url} />
    </div>
  );
}
