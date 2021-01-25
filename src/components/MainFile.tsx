import React, { useState } from 'react';
import UploadFileMain from './UploadFile/UploadFileMain';
import NoiseReductionMain from './NoiseReduction/NoiseReductionMain';
import Example from './Example';

export interface IMainFileProps {
  load: string;
  setLoad: (val: string) => void;
  inputFile: any;
  setInputFile: (file: any) => void;
}

// IF EXAMPLE CLICKED LOAD WITH EXAMPLE FILE
export const MainFile = ({
  load,
  setLoad,
  inputFile,
  setInputFile,
}: IMainFileProps) => {
  // const [inputFile, setInputFile] = useState(null);
  const [example, setExample] = useState(false);

  const handleFile = (file: any) => {
    setInputFile(file);
  };

  const handleEmpty = () => {
    setLoad('empty');
    setInputFile(null);
  };

  const handleLoading = () => {
    setLoad('loading');
  };

  const handleLoaded = () => {
    setLoad('loaded');
  };

  const handleExample = async () => {
    setExample(true);

    const response = await fetch(
      require('../../public/audio/Example_Noise_Reduction.mp3'),
    );
    const data = await response.blob();
    const file = new File([data], 'Example.mp3', { type: 'audio/mp3' });
    handleFile(file);
    handleLoading();
  };

  if (load === 'empty') {
    return (
      <>
        <div className="main_file">
          <UploadFileMain
            handleFile={handleFile}
            handleLoading={handleLoading}
          />
        </div>
        <Example handleExample={handleExample} />
        <small style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
          Does not support mobile devices
        </small>
      </>
    );
  }

  return (
    <div className="main_file">
      <NoiseReductionMain
        load={load}
        inputFile={inputFile}
        handleLoaded={handleLoaded}
        handleEmpty={handleEmpty}
        example={example}
      />
    </div>
  );
};

export default MainFile;
