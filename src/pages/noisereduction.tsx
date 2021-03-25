import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Title from '@/components/Title';
import Back from '@/components/Back';
import MainFile from '@/components/MainFile';
import BulletPoints from '@/components/BulletPoints/BulletPoints';
import InstructionsMain from '@/components/Instructions/InstructionsMain';
import Footer from '@/components/Footer';

const NoiseReduction: React.FC = () => {
  const [inputFile, setInputFile] = useState(null);
  const [load, setLoad] = useState('empty');

  const handleBack = () => {
    setInputFile(null);
    setLoad('empty');
  };
  return (
    <div>
      <Head>
        <title>MediaEdits.io | Noise Reduction in the browser!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Remove background noise from audio files online for free!"
        />
      </Head>
      <NavBar />
      <div className="container noisereduction">
        <Title />
        <div>{load !== 'empty' && <Back handleBack={handleBack} />}</div>
        <MainFile
          load={load}
          setLoad={setLoad}
          inputFile={inputFile}
          setInputFile={setInputFile}
        />
        {load === 'empty' ? '' : <InstructionsMain />}
      </div>
      <Footer />
    </div>
  );
};

export default NoiseReduction;
