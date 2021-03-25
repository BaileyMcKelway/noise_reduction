import * as React from 'react';
import LandingDescription from './LandingDescription';
import LandingImage from './LandingImage';
import ToolCards from './ToolCards/ToolCards';

export interface ILandingMainProps {
  handleExample: () => void;
}

export default function LandingMain() {
  return (
    <div className="landing_main">
      <div className="landing_top">
        <LandingDescription />
        <LandingImage />
      </div>
      <ToolCards />
    </div>
  );
}
