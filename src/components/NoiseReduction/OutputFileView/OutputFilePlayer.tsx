import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Paper from '@material-ui/core/Paper';

export interface IOutputFilePlayerProps {
  outputFile: any;
  id: string;
  handleLoad: (val: boolean) => void;
}

export default function OutputFilePlayer({
  outputFile,
  id,
  handleLoad,
}: IOutputFilePlayerProps) {
  const [url, setUrl] = useState('');
  const [audioEle, setAudioEle] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [waveForm, setWaveForm] = useState(null);

  const handlePlay = () => {
    setPlaying(!playing);
    waveForm.playPause();
  };
  useEffect(() => {
    const WaveSurfer = require('wavesurfer.js');
    let waveForm = WaveSurfer.create({
      barHeight: 5,
      backend: 'WebAudio',
      container: `#${id}`,
      normalize: true,
      mediaType: 'audio',
      partialRender: true,
      responsive: true,
      waveColor: '#acd5fe',
      progressColor: '#0080ff',
      backgroundColor: '#f1f1f1',
    });
    waveForm.load(outputFile);
    setUrl(outputFile);
    setWaveForm(waveForm);
  }, []);

  if (waveForm) {
    waveForm.on('ready', function () {
      handleLoad(false);
    });
    waveForm.on('finish', function () {
      setPlaying(false);
    });

    waveForm.on('pause', function () {
      if (playing === true) {
        setPlaying(false);
      }
    });
  }
  return (
    <Paper elevation={2}>
      <div className="outfile_controls">
        {playing === false ? (
          <IconButton
            onClick={handlePlay}
            style={{
              backgroundColor: '#eaeaea',
              width: '10px',
              height: '10px',
            }}
          >
            <PlayArrowRoundedIcon style={{ color: '#434343' }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={handlePlay}
            style={{
              backgroundColor: '#f3f3f3',
              width: '10px',
              height: '10px',
            }}
          >
            <PauseRoundedIcon style={{ color: '#27d500' }} />
          </IconButton>
        )}

        <a href={url} download>
          <GetAppRoundedIcon style={{ color: '#434343' }} />
        </a>
      </div>
      <div id={id}></div>
      <audio id={`${id}`} src={url} />
    </Paper>
  );
}
