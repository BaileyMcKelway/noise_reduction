import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Back from '@/components/Back';
import MainFile from '@/components/MainFile';
import InstructionModMain from '@/components/BulletPoints/BulletPoints';
import InstructionsMain from '@/components/Instructions/InstructionsMain';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const [inputFile, setInputFile] = useState(null);
  const [load, setLoad] = useState('empty');

  const handleBack = () => {
    setInputFile(null);
    setLoad('empty');
  };
  return (
    <div>
      <div className="container">
        <NavBar />
        <Title />
        <div>
          <Description />
          {load !== 'empty' && <Back handleBack={handleBack} />}
        </div>
        <MainFile
          load={load}
          setLoad={setLoad}
          inputFile={inputFile}
          setInputFile={setInputFile}
        />
        {load === 'empty' ? <InstructionModMain /> : <InstructionsMain />}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
