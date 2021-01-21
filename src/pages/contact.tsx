import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <p>
        If there is any support needed please contact:
        <a href="mailto:contact@mediaedits.io"> contact@mediaedits.io </a>
      </p>
      <Footer />
    </div>
  );
};

export default Contact;
