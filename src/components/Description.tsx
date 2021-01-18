import * as React from 'react';

export interface IDescriptionProps {}

export default function Description(props: IDescriptionProps) {
  return (
    <div className="description_main">
      <p className="description_content">
        Remove unwanted background noise from audio files!
      </p>
    </div>
  );
}
