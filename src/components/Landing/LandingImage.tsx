import * as React from 'react';
import Image from 'next/image';

export interface ILandingImageProps {
  handleExample: () => void;
}

export default function LandingImage() {
  return (
    <div className="landing_image">
      <Image
        src="/folder.png"
        alt="media folder"
        height={800}
        width={950}
        layout="responsive"
        quality={100}
        // sizes="(max-width: 600px) 100vw, (max-width: 1023px) 48vw, 23vw"
        priority
      />
    </div>
  );
}
