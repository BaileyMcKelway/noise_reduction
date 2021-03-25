import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact: React.FC = () => (
  <div className="container contact">
    <NavBar />
    <p>
      If there is any support needed or you just want to reach out please email:
      <a href="mailto:contact@mediaedits.io"> contact@mediaedits.io </a>
    </p>
    <p>Contact the creator!</p>
    <div>
      <a
        href="https://www.linkedin.com/in/bailey-mckelway/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon fontSize="large" className="social_links" />
      </a>
      <a
        href="https://github.com/BaileyMcKelway"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon fontSize="large" className="social_links" />
      </a>
    </div>
  </div>
);

export default Contact;
