import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Title from '@/components/Title';
import Description from '@/components/Description';
import MainFile from '@/components/MainFile';
import InstructionModMain from '@/components/BulletPoints/BulletPoints';
import InstructionsMain from '@/components/Instructions/InstructionsMain';
import Footer from '@/components/Footer';
const Home: React.FC = () => {
  const [load, setLoad] = useState('empty');

  return (
    <div>
      <div className="container">
        <NavBar />
        <Title />
        <Description />
        <MainFile load={load} setLoad={setLoad} />
        {load === 'empty' ? <InstructionModMain /> : <InstructionsMain />}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
