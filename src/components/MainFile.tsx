import React, { useEffect, useState } from 'react';
import UploadFileMain from './UploadFile/UploadFileMain';
import Example from './Example';
import NoiseReductionMain from './NoiseReduction/NoiseReductionMain';
export interface IMainFileProps {
  load: string;
  setLoad: (val: string) => void;
}

// IF EXAMPLE CLICKED LOAD WITH EXAMPLE FILE
export const MainFile = ({ load, setLoad }: IMainFileProps) => {
  const [inputFile, setInputFile] = useState(null);
  const [example, setExample] = useState(false);

  const handleExample = async () => {
    setExample(true);
    let response = await fetch(
      require('../../public/audio/Example_Noise_Reduction.mp3'),
    );
    let data = await response.blob();
    const file = new File([data], 'Example.mp3', { type: 'audio/mp3' });
    handleFile(file);
    handleLoading();
  };

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
      </>
    );
  } else {
    return (
      <div className="main_file">
        <NoiseReductionMain
          load={load}
          inputFile={inputFile}
          handleFile={handleFile}
          handleLoaded={handleLoaded}
          handleEmpty={handleEmpty}
          example={example}
        />
      </div>
    );
  }
};

export default MainFile;
