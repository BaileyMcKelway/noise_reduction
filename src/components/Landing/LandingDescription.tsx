import * as React from 'react';

export interface ILandingDescriptionProps {
  handleExample: () => void;
}

export default function LandingDescription() {
  return (
    <div className="landing_description">
      <h1>Online video and audio editing made simple</h1>
      <p>
        MediaEdits.io makes it easier than ever to edit your audio and video
        files online for free. With a simple design but powerful tooling,
        MediaEdits.io allows you to optomize your projects to their best
        potential!
      </p>
    </div>
  );
}
