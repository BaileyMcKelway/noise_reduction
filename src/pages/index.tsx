import React from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import LandingMain from '@/components/Landing/LandingMain';
import Footer from '@/components/Footer';

const Home: React.FC = () => (
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

    <div className="container">
      <NavBar />
      <LandingMain />
      <Footer />
    </div>
  </div>
);

export default Home;
